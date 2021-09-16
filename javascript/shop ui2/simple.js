// **웹서비스 개발방식은 두가지가 있습니다**

// 서버사이드 랜더링

// 1. 서버에서 HTML 파일을 미리 다 완성해서 보내주기

// 클라이언트 사이드 랜더링

// 2. 서버에서 텅빈 HTML 파일 + 상품데이터만 보내고 HTML을 완성하는건 프론트엔드에서 자바스크립트로 시키기

//서버로부터 받아왔다 가정한 데이터
var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

// html에 데이터바인딩을 하기위한 js 조작어
$(".card-body h5").eq(0).html(products[0].title);
$(".card-body p")
  .eq(0)
  .html("가격 : " + products[0].price);
$(".card-body h5").eq(1).html(products[1].title);
$(".card-body p")
  .eq(1)
  .html("가격 : " + products[1].price);
$(".card-body h5").eq(2).html(products[2].title);
$(".card-body p")
  .eq(2)
  .html("가격 : " + products[2].price);
