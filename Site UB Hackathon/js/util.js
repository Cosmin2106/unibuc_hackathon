window.onscroll = function() {
  if ($(document).scrollTop() > 80) {
    $("#navbar_main").addClass("navbar-contract");
  } else {
    $("#navbar_main").removeClass("navbar-contract");
  }
}

$(document).ready(function() {
  $("#navbar_logo").on('click', smoothScroll);
  $("#signup_btn_main").on('click', smoothScroll).on('click', changeColors);
  $("#navbar_opt1").on('click', smoothScroll);
  $("#navbar_opt2").on('click', smoothScroll);
  $("#navbar_opt3").on('click', smoothScroll);
  $("#navbar_opt4").on('click', smoothScroll);
});

function smoothScroll() {
  if (this.hash !== "") {
    var oldHash = this.hash;
    var mainNavHeight = $("#navbar_main").height() + 64;

    $('html, body').animate({
      scrollTop: $(oldHash).offset().top - mainNavHeight
    }, 800, 'swing');
    window.location.hash = oldHash - mainNavHeight;
  }
}

function changeColors() {
  $('#color-text-despre').addClass("text-col-blue");
  $('#color-text-vs').addClass("text-col-yellow");
  $('#color-text-covid').addClass("text-col-red");
}
