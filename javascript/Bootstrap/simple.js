$("#show-menu").on("click", function () {
  $(".left-menu").animate({ marginLeft: "0px" }, 500);
});

//===================================================================================================================================
//기본js 로 모달창 띄우기
//class 선언뒤에는 항상 위치값을 기입해야한다.
// document
//   .getElementsByClassName("logbtn")[0]
//   .addEventListener("click", function () {
//     document.getElementsByClassName("black-background")[0].style.display =
//       "block";
//   });

//[jQuery 로 모달창 띄우기]
// $(".logbtn").on("click", function () {
//   $(".black-background").fadeIn();
// });

//[jQuery  css로 모달창 띄우기]
// $(".logbtn").on("click", function () {
//   $(".black-background").css("transform", "translateY(0px)");
// });

// $(".closebtn").on("click", function () {
//   $(".black-background").css("transform", "translateY(-1000px)");
// });

//[jQuery  addClass로 모달창 띄우기]
//addClass()의 파라미터에는 "."을 붙히지 않아도 된다.
$(".logbtn").on("click", function () {
  $(".black-background").addClass("slide-down");
});
$(".closebtn").on("click", function () {
  $(".black-background").addClass("slide-up");
});
//===================================================================================================================================
//기본js로 nav창 띄우기
// document
//   .getElementsByClassName("nav-sub-button")[0]
//   .addEventListener("click", function () {
//     document.getElementsByClassName("nav-sub")[0].style.display = "block";
//   });

//jQuery로 nav창 띄우기
$(".nav-sub-button").on("click", function () {
  $(".nav-sub").slideToggle();
});
//===================================================================================================================================
//form 창 email,password 비워져 있으면 전송안되게 제한 하는 함수
// $("form").on("submit", function (e) {
//   if ($("#email").val() == "" && $("#password").val() == "") {
//     e.preventDefault();
//     $("#email-alert").show();
//     $("#password-alert").show();
//   } else if ($("#email").val() == "") {
//     e.preventDefault();
//     $("#email-alert").show();
//   } else if ($("#password").val() == "") {
//     e.preventDefault();
//     $("#password-alert").show();
//   }
// });
//===================================================================================================================================
//삼육구게임 기본!
// 먼저 input값과 버튼을 연결
// 버튼을 누르면 369게임 시작
$("#game").on("submit", function game() {
  if ($("#gameval").val() % 3 == 0 && $("#gameval").val() % 9 == 0) {
    console.log("박수*2");
  } else if ($("#gameval").val() % 3 === 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
});
