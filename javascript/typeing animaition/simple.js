var h1tag = document.querySelector("h1");
var text = document.querySelector("h1").innerHTML;
// text -> 태그 내부의 글

$("button").on("click", function () {
  //h1tag 초기화
  h1tag.innerHTML = "";
  // 시간지난후에 실행하는 함수
  setTimeout(function () {
    //h1tag 내부 html요소는 = h1tag 의 html + text의1번째 자리
    h1tag.innerHTML = h1tag.innerHTML + text[0];
  }, 500);
  setTimeout(function () {
    h1tag.innerHTML = h1tag.innerHTML + text[1];
  }, 1000);
  setTimeout(function () {
    h1tag.innerHTML = h1tag.innerHTML + text[2];
  }, 1500);
});
