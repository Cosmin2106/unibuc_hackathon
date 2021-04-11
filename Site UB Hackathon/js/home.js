var firebaseConfig = {
  apiKey: "<key>",
  authDomain: "<domain>",
  databaseURL: "<url>",
  projectId: "<id>",
  storageBucket: "<bucket>",
  messagingSenderId: "<id>",
  appId: "<id>",
  measurementId: "<id>"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let db = firebase.firestore();
let vLink = "https://forms.gle/HUqRPQuR22Uf866u6";
let cLink = "https://forms.gle/FjwpZBwbQJTf2rLn6";

var endDate = "Jan 1, 1970 00:00:00";
var challengeData = new Array();
var buttonChosen = 0;
var loadIsReady = false;
var globalEndDateV;
var globalEndDateC;

$("#container_3_cont_counter").addClass("item-gone");
$("#container_3_cont_challenges").addClass("item-gone");

db.collection("all_data").get().then(function (contDocs) {
  challengeData = contDocs.docs[0].data().challenges;
  var contestDate = new Date(contDocs.docs[1].data().end_time);
  var distance = contestDate - new Date().getTime();

  globalEndDateV = new Date(contDocs.docs[1].data().signup_end_time_v);
  globalEndDateC = new Date(contDocs.docs[1].data().signup_end_time_c);

  loadReady();
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
    $(colText).html(data[i - 1]);
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

function loadReady() {
  console.log("Firestore OK.");
  loadIsReady = true;

  if (buttonChosen === 1) {
    openBtnV();
  } else if (buttonChosen === 2) {
    openBtnC();
  }
  $("#container_loading").removeClass("container-loading-on");
  buttonChosen = 0;
}

function openBtnV() {
  var dist = globalEndDateV - new Date().getTime();
  if (dist > 0) {
    window.open(vLink, "_blank");
  } else {
    showAlert();
  }
}

function openBtnC() {
  var dist = globalEndDateC - new Date().getTime();
  if (dist > 0) {
    window.open(cLink, "_blank");
  } else {
    showAlert();
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
$("#signup_btn_v").on('click', function () {
  if (loadIsReady) {
    openBtnV();
  } else {
    buttonChosen = 1;
    if (!$("#container_loading").hasClass("container-loading-on")) {
      $("#container_loading").addClass("container-loading-on");
    }
  }
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
$("#signup_btn_c").on('click', function () {
  if (loadIsReady) {
    openBtnC();
  } else {
    buttonChosen = 2;
    if (!$("#container_loading").hasClass("container-loading-on")) {
      $("#container_loading").addClass("container-loading-on");
    }
  }
});

function showAlert() {
  $("#alert_no_signup").show();
  setTimeout(function () {
    $("#alert_no_signup").hide();
  }, 3000);
}
