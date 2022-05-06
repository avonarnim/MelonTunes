"use strict";

var show = function (a) {
  $("#tabs-".concat(a)).addClass("active").siblings().removeClass("active");
  $("#li-".concat(a)).addClass("active").siblings().removeClass("active");
};

function openLink(evt, animName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("project");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(animName).style.display = "block";
  evt.currentTarget.className += " active";
}
