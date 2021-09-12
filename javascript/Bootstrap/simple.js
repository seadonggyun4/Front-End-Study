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

//jQuery로 nav창 변환
//scroll 이벤트 리스너는 무겁다
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 100) {
    $(".nav-menu").addClass("nav-black");
    $(".nav-menu h1").addClass("font-change ");
  } else if ($(window).scrollTop() < 100) {
    $(".nav-menu").removeClass("nav-black");
    $(".nav-menu h1").removeClass("font-change ");
  }
});

//jQuery로 nav창 띄우기
$(".nav-sub-button").on("click", function () {
  $(".nav-sub").slideToggle();
});
//===================================================================================================================================
//form 창 email,password 비워져 있으면 전송안되게 제한 하는 함수
$("form").on("submit", function (e) {
  // if ($("#email").val() == "" && $("#password").val() == "") {
  //   e.preventDefault();
  //   $("#email-alert").show();
  //   $("#password-alert").show();
  // } else if ($("#email").val() == "") {
  //   e.preventDefault();
  //   $("#email-alert").show();
  // } else if ($("#password").val() == "") {
  //   e.preventDefault();
  //   $("#password-alert").show();
  // }
  var 입력한이메일 = $("#email").val();
  var 입력한비밀번호 = $("#password").val();

  if (
    /^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>().,;s@"]+.{0,1})+([^<>().,;:s@"]{2,}|[d.]+))$/.test(
      입력한이메일
    ) == false
  ) {
    e.preventDefault();
    $("#email-alert").show();
  } else if (입력한이메일 == "") {
    e.preventDefault();
    $("#email-alert").show();
  }

  if (/^[A-Za-z0-9]{6,12}$/.test(입력한비밀번호) == false) {
    e.preventDefault();
    $("#password-alert").show();
  } else if (입력한비밀번호 == "") {
    e.preventDefault();
    $("#password-alert").show();
  }
});

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
//===================================================================================================================================
//캐러셀
var 지금보이는사진 = 1;
$(".slide-next").on("click", function () {
  $(".slide-container").css(
    "transform",
    "translateX(-" + 지금보이는사진 + "00vw)"
  );
  if (지금보이는사진 < 2) {
    지금보이는사진 = 지금보이는사진 + 1;
  }
});

$(".slide-back").click(function () {
  $(".slide-container").css(
    "transform",
    "translateX(-" + (지금보이는사진 - 1) + "00vw)"
  );
  if (지금보이는사진 > 1) {
    지금보이는사진 = 지금보이는사진 - 1;
  }
});

// transform의 경우, classList.add(클래스명) 보다 인라인(element.style.속성() 의 형식)으로 적용하는 것이 더 잘 동작한다.
$(".slide-1").on("click", function () {
  /* x축의 위치를 해당 값으로 이동시키는 명령어 */
  $(".slide-container").css("transform", "translateX(0vw)");
});

$(".slide-2").on("click", function () {
  $(".slide-container").css("transform", "translateX(-100vw)");
});

$(".slide-3").on("click", function () {
  $(".slide-container").css("transform", "translateX(-200vw)");
});
//===================================================================================================================================
//탭 구현
//for 반복문 사용
//length함수는 해당요소 개수를 파악한다.
for (let i = 0; i < $(".tab-button").length; i++) {
  $(".tab-button")
    .eq(i)
    .on("click", function () {
      $(".tab-button").removeClass("active");
      $(".tab-content").removeClass("show");
      $(".tab-button").eq(i).addClass("active");
      $(".tab-content").eq(i).addClass("show");
    });
}
