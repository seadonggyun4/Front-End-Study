//기본js 로 모달창 띄우기
//class 선언뒤에는 항상 위치값을 기입해야한다.
// document
//   .getElementsByClassName("logbtn")[0]
//   .addEventListener("click", function () {
//     document.getElementsByClassName("black-background")[0].style.display =
//       "block";
//   });
//jQuery 로 모달창 띄우기
$(".logbtn").on("click", function () {
  //if 조건식
  //input 값을 가져오는 방법
  $(".black-background").fadeIn();
});

$(".closebtn").on("click", function () {
  $(".black-background").fadeOut();
});

//기본js로 nav창 띄우기
// document
//   .getElementsByClassName("nav-sub-button")[0]
//   .addEventListener("click", function () {
//     document.getElementsByClassName("nav-sub")[0].style.display = "block";
//   });

//jQuery로 창 띄우기
$(".nav-sub-button").on("click", function () {
  $(".nav-sub").slideToggle();
});

//form 창 비워져 있으면 전송안되게 제한 하는 함수
$("form").on("submit", function (e) {
  if ($("input").val() == "") {
    e.preventDefault();
    alert("입력란이 비어있습니다.");
  }
});

//삼육구게임 기본!
