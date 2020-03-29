$(document).ready(function() {
  $("#navbar_logo").on('click', smoothScroll);
  $("#signup_btn_main").on('click', smoothScroll);
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
