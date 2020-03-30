var firebaseConfig = {
  apiKey: "AIzaSyCUMchy7fCFTtK9-Rrf_ShhABQcp2H7MSc",
  authDomain: "ub-hack-e9576.firebaseapp.com",
  databaseURL: "https://ub-hack-e9576.firebaseio.com",
  projectId: "ub-hack-e9576",
  storageBucket: "ub-hack-e9576.appspot.com",
  messagingSenderId: "13647175785",
  appId: "1:13647175785:web:97aa00a16e2c93360302f8",
  measurementId: "G-9GS8P65ZMB"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let db = firebase.firestore();
var endDate = "Jan 1, 1970 00:00:00";
var challengeData = new Array();

$("#container_3_cont_counter").addClass("item-gone");
$("#container_3_cont_challenges").addClass("item-gone");

db.collection("all_data").get().then(function (contDocs) {
  challengeData = contDocs.docs[0].data().challenges;
  endDate = contDocs.docs[1].data().end_time;

  var contestDate = new Date(endDate);
  var distance = contestDate - new Date().getTime();

  $("#container_3_cont_loading").addClass("item-gone");
  if (distance <= 0) {
    $("#container_3_cont_challenges").removeClass("item-gone");
    loadChallenges(challengeData);
  } else {
    $("#container_3_cont_counter").removeClass("item-gone");
    var counter = setInterval(function() {
      var now = new Date().getTime();
      var distance = contestDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (days < 10) days = '0' + days;
      if (hours < 10) hours = '0' + hours;
      if (minutes < 10) minutes = '0' + minutes;
      if (seconds < 10) seconds = '0' + seconds;

      $("#counter_days").text(days);
      $("#counter_hours").text(hours);
      $("#counter_mins").text(minutes);
      $("#counter_secs").text(seconds);

      if (distance < 0) {
        clearInterval(counter);
        $("#container_3_cont_counter").addClass("item-gone");
        loadChallenges(challengeData);
      }
    }, 1000);
  }
});

function loadChallenges(data) {
  if ($("#container_3_cont_challenges").hasClass("item-gone")) {
    $("#container_3_cont_challenges").removeClass("item-gone");
  }

  for (i = 1; i <= data.length; i++) {
    if (i > 1) {
      var divider = document.createElement("div");
      $(divider).addClass("divider");
      $("#container_3_cont_challenges").append(divider);
    }

    var colText = document.createElement("p");
    $(colText).addClass("challenge-text2");
    $(colText).text(data[i - 1]);
    var colNum = document.createElement("h1");
    $(colNum).addClass("challenge-text");
    if (i < 10) {
      $(colNum).text('0' + i);
    } else {
      $(colNum).text(i);
    }

    var col1 = document.createElement("div");
    var col2 = document.createElement("div");
    $(col1).addClass("col-lg-3");
    $(col2).addClass("col-lg-9");
    $(col1).append(colNum);
    $(col2).append(colText);

    var challengeTextCont = document.createElement("div");
    $(challengeTextCont).addClass("challenge-text-cont row d-flex align-items-center");
    $(challengeTextCont).append(col1).append(col2);
    $("#container_3_cont_challenges").append(challengeTextCont);
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
