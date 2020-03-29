window.onscroll = function() {
  scrollNavbar()
};

function scrollNavbar() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar_main").classList.add("navbar-contract");
  } else {
    document.getElementById("navbar_main").classList.remove("navbar-contract");
  }
}

$("navbar_logo").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
           window.location.hash = hash;
      });
  }
});
