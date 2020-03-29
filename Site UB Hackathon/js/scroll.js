$(document).ready(function() {
  $("#navbar_logo").on('click', smoothScroll);
});

function smoothScroll(event) {
  if (this.hash !== "") {
    var oldHash = this.hash;

    $('html, body').animate({
      scrollTop: $(oldHash).offset().top
    }, 800, 'swing');
    window.location.hash = oldHash;
  }
}
