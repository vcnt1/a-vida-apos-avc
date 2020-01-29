function toggleFullScreen(id) {
  var elem2 = document.getElementById ("app");
  var elem1 = document.getElementById ("btn_full");
  var elem3 = document.getElementById ("modal-video");
  var elem4 = document.getElementById ("modal-texto");
  
  
  elem4.classList.add('fullScreen');
  elem3.classList.add('fullScreen');
  elem2.classList.add('full');
  elem1.classList.add('fscreen');
  var div = document.getElementById(id);

  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (div.requestFullScreen) {
      div.requestFullScreen();
    } else if (div.mozRequestFullScreen) {
      div.mozRequestFullScreen();
    } else if (div.webkitRequestFullScreen) {
      div.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = (window.innerWidth) / (window.innerHeight);
  } else {
   
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
    ;
    elem4.classList.remove('fullScreen');
    elem3.classList.remove('fullScreen');
    elem1.classList.remove('fscreen');
    elem2.classList.remove('full');
    renderer.setSize(width, height);
    camera.aspect = width / height;
  }
}