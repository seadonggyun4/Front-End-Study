# Front-End-Study
# [Css Project]
<img width="534" alt="cssproject" src="https://user-images.githubusercontent.com/84368302/131813953-d71cfd95-f9cd-4b53-9f07-da875c08ef63.PNG">

## 1.CSS Project란?
* 피그마 파일을 통해 반응형 웹페이지 한개 구현
## 2.직접 해본 CSS Project 문제점
1.태그 hover 타겟팅 범위 확장 <br/>
2.반응형으로 이미지를 감췄다 나타나게 하는법 <br/>
3.구조적인 작성법의 부족함(태그관리, 시멘틱 작성) <br/>
4.부트스트랩 그리드 사용법 <br/>
5.반응형 웹 작성법 <br/>

## 3. CSS Project
1.태그 hover 타겟팅 범위 확장
  * css 선택자를 통해 간단하게 범위 확장이 가능하다. <br/>
  ```css
  /* program-card가 hover상태일 때 strong */
  .program-card:hover strong {
    color: #fff;
  }


  /* program-card의 strong이 hover 상태일때 */
  /* 이렇게 되면 당연히 strong에 직접적으로 닿을때만 hover속성이 발동된다. */
  .program-card strong:hover {
    color: #fff;
  }
  ```
2.반응형으로 이미지를 감췄다 나타나게 하는법 <br/>
 * display:none을 통해 감췄다 medaia 영역에서는 display 값을 바꾼다.<br/>
 
3.구조적인 작성법의 부족함(태그관리, 시멘틱 작성) <br/>
 * 항상 웹 요소중 똑같은패턴이 반복되고 있다면 이는 모듈화 시키는것이 훨씬 시멘틱한 코딩이다.<br/>
 * section의 크기를 정하는 말도안되는 짓은 금지! 앞으로 컨텐츠가 추가될 때마다 크기를 지정하는 짓은 비생산 적이다.<br/>
 * margin,padding 등을 사용할 때는 변화를 주고자 하는 태그들의 부모,자식 관계를 명확히 파악한후 이해하기 쉽게 준다.<br/>
 
4.부트스트랩 그리드 사용법  <br/>
 * container,row,col 이 3개의 태그에 css 속성을 적용하는 일은 최대한 자제해야 한다.(사용하게 된다면 margin-bottom 과 같은 위아래 정렬을 위한 정도)<br/>
 * row에 있는 태그,box를 정렬하기 위해서는 class row   옆에 "justify-content-위치값", "justify-item-위치값 을 class명으로 추가 선언하면 가운데 정렬이 된다.<br/>
 
5.반응형 웹 작성법<br/>
 * 모바일 → 웹 순으로 작성하는편이 쉽고 간결하게 작성가능하다.<br/>






