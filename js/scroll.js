'use strict';

//スクロール
window.onscroll = function(evt) {
  const position = document.documentElement.scrollTop || document.body.scrollTop;

  if (position >= 300) {
    document.getElementById('page-top').classList.add('open');
  } else {
    document.getElementById('page-top').classList.remove('open');
  }
};

