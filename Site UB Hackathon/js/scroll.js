document.getElementById("navbar_logo").onclick = function() {
  scrollToTop();
}

function scrollToTop() {
  if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
        window.scrollBy(0, -40);
        requestAnimationFrame(scrollToTop);
    }
}
