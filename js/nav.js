jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= $(window).height() - $(".navbar").height()) {
      $(".cardinal-back").css("background", "rgb(25, 25, 75)");
    } else {
      $(".cardinal-back").css("background", "transparent");
    }
  });
});
