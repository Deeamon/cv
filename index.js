document.querySelector('.accordion__item').addEventListener('click', function(){
  this.classList.toggle('active');
});

let showDesc = document.querySelectorAll('.project-name');

[].forEach.call(showDesc, function(el){
  el.addEventListener('click', function () {
    showDesc.forEach(i => { i.classList.toggle('active'); });
  });
});


let items = document.querySelectorAll('.carousel .item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n){
  currentItem = (n + items.length) % items.length;
}

function hideItem(direction){
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend', function(){
    this.classList.remove('active', direction);
  });
}

function showItem(direction){
  items[currentItem].classList.add('next', direction);
  items[currentItem].addEventListener('animationend', function(){
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
  });
}

function nextItem(n){
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

function previousItem(n){
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

document.querySelector('.control.left').addEventListener('click', function(){
  if(isEnabled){
    previousItem(currentItem);
  }
});

document.querySelector('.control.right').addEventListener('click', function(){
  if(isEnabled){
    nextItem(currentItem);
  }
});

const swipedetect = (el) => {

  let surface = el;
  let startX = 0;
  let startY = 0;
  let distX = 0;
  let distY = 0;
  let startTime = 0;
  let elapsedTime = 0;

  let threshold = 150;
  let restraint = 100;
  let allowedTime = 300;

  surface.addEventListener('mousedown', function(e){
    startX = e.pageX;
    startY = e.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  }, false);
  
  surface.addEventListener('mouseup', function(e){
    distX = e.pageX - startX;
    distY = e.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    if(elapsedTime <= allowedTime){
      if(Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
        if(distX > 0){
          if(isEnabled){
            previousItem(currentItem);
          }
        } else {
          if(isEnabled){
            nextItem(currentItem);
          }
        }
      }
    }

    e.preventDefault();
  }, false);

  surface.addEventListener('touchstart', function(e){
    if(e.target.classList.contains('arrow') || e.target.classList.contains('control')){
      if(e.target.classList.contains('left')){
        if(isEnabled){
          previousItem(currentItem);
        }
      } else {
        if(isEnabled){
          nextItem(currentItem);
        }
      }
    }

    let touchObj = e.changedTouches[0];
    startX = touchObj.pageX;
    startY = touchObj.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  }, false);

  surface.addEventListener('touchmove', function(e){
    e.preventDefault();
  }, false);
  
  surface.addEventListener('touchend', function(e){
    let touchObj = e.changedTouches[0];
    distX = touchObj.pageX - startX;
    distY = touchObj.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    if(elapsedTime <= allowedTime){
      if(Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
        if(distX > 0){
          if(isEnabled){
            previousItem(currentItem);
          }
        } else {
          if(isEnabled){
            nextItem(currentItem);
          }
        }
      }
    }

    e.preventDefault();
  }, false);

}

let el = document.querySelector('.carousel');
swipedetect(el);