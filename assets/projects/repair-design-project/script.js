

// document.querySelector('.btn-mobile').addEventListener('click', function(){
//   let currentText = document.querySelector('.btn-mobile').textContent;
  
//   if(currentText === 'Mobile'){
//     document.getElementsByTagName('body')[0].style.width = "870px";
//     document.querySelector('.btn-mobile').textContent = 'Desktop';
//   } else{
//     document.getElementsByTagName('body')[0].style.width = "1440px";
//     document.querySelector('.btn-mobile').textContent = 'Mobile';
//   }

// });

// document.querySelector('.btn-mobile').addEventListener('click', function() {
//   let viewport = document.querySelector("meta[name=viewport]");
//   viewport.setAttribute('content', 'width=870');
// });

// function requestDesktopSite(){
//   if(document.getElementsByTagName('meta')['viewport'].content=='width= 1440'){
//    document.getElementsByTagName('meta')['viewport'].content='width= 400';
//   }else{
//    document.getElementsByTagName('meta')['viewport'].content='width= 1440';
//   }
//  }

//  document.querySelector('.btn-mobile').addEventListener('click', function() {
//   document.getElementsByTagName('link').href ='style.css';
//  });

 function changeCSS(cssFile, cssLinkIndex) {

  let oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

  let newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", cssFile);

  document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
