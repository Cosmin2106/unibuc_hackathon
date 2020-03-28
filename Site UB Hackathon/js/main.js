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
