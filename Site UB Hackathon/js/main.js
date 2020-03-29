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

$("#signup_btn_v").hover(function() {
  $("#container_1_col_1").width("60%");
  $("#container_1_col_2").width("40%");
  $("#signup_btn_c").css("opacity", 0.5);
}, function() {
  $("#container_1_col_1").width("50%");
  $("#container_1_col_2").width("50%");
  $("#signup_btn_c").css("opacity", 1);
});

$("#signup_btn_c").hover(function() {
  $("#container_1_col_1").width("40%");
  $("#container_1_col_2").width("60%");
  $("#signup_btn_v").css("opacity", 0.5);
}, function() {
  $("#container_1_col_1").width("50%");
  $("#container_1_col_2").width("50%");
  $("#signup_btn_v").css("opacity", 1);
});
