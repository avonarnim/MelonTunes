jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= $(window).height() - $(".navbar").height()) {
      $(".cardinal-back").css("background", "#2b8e6a");
      $(".navbar-dark .navbar-nav .nav-link").css("color", "white");
    } else {
      $(".cardinal-back").css("background", "transparent");
      $(".navbar-dark .navbar-nav .nav-link").css("color", "#322b8e");
    }
  });
});
