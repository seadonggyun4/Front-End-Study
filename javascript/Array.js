//선언 방법은 총 3가지!

// let 과일 = ["사과", "바나나", "복숭아"];
// let 과일 = new Array(3);
let 과일 = new Array("사과", "수박", "복숭아");

document.write(`${과일} <br>`);
document.write(`${과일[0]} <br>`);
document.write(`${과일[2]} <br>`);

//배열 내장함수
//pop() -> 배열에서 맨뒤 요소 꺼내는 함수/ 다른 변수에 꺼낸 값을 넣을수 도 있다.
//push() -> 요소를 배열 맨뒤에 넣는 함수
//join() ->
//shift() -> 배열 맨 앞의 요소 꺼내는 함수
//unshift() -> 배열 맨 앞에 요소를 넣는 함수
//splice() -> 배열에 요소를 넣는함수/ replace를 설정해 기존 배열값들을 유지할지 말지 정할 수 있다.
//slice() -> 배열의 부분을 잘라내는 함수/ slice(시작, 끝+1)
//concat()-> 배열 + 배열 = 새로운 배열/ 배열과 배열을 더해 기존의 변수에 할당된 배열이 아닌 새로운 배열을 만들어 낸다.
//sort() ->  배열의 요소들을 정렬한다/사전식으로만 정렬
// reverse() -> 배열의 요소들의 순서를 뒤집는다.

//다차원 배열
//배열, object 가 여러개로 중첩되고 감싸진 형태
