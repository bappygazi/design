/* JS */
$(function () {
  //    sticky navbar
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    var sticky = $(".navbar");
    if (scrolling >= 20) {
      sticky.addClass("navbg");
    } else {
      sticky.removeClass("navbg");
    }
  });

  //    navbar logo change
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling >= 30) {
      $(".logo").addClass("logo-block");
    } else {
      $(".logo").removeClass("logo-block");
    }
  });
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling >= 30) {
      $(".logo-white").addClass("logo-white-none");
    } else {
      $(".logo-white").removeClass("logo-white-none");
    }
  });
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling >= 30) {
      $(".navbar-nav").removeClass("golden-color");
    } else {
      $(".navbar-nav").addClass("golden-color");
    }
  });
  //navrbar text color black
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling >= 30) {
      $(".nav-link ").addClass("text-black");
    } else {
      $(".nav-link").removeClass("text-black");
    }
  });
  //bar color black
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling >= 30) {
      $(".fa-bars ").removeClass("bar-white");
    } else {
      $(".fa-bars").addClass("bar-white");
    }
  });
});
