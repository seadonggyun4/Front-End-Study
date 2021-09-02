# Front-End-Study
## [Css Project]
### 1.Css Project란?
*피그마 파일을 통해 반응형 웹페이지 한개 구현
### 2.직접 해본 css Project 문제점
1.태그 hover 타겟팅 범위 확장
2.반응형으로 이미지를 감췄다 나타나게 하는법
3.구조적인 작성법의 부족함(태그관리, 시멘틱 작성)
4.부트스트랩 그리드 사용법 
5.반응형 웹 작성법
6.선택자의 우선순위에 대한 정확한 이해 부족함
### 3. css Project
1.태그 hover 타겟팅 범위 확장
  *css 선택자를 통해 간단하게 범위 확장이 가능하다.
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
2.반응형으로 이미지를 감췄다 나타나게 하는법
3.구조적인 작성법의 부족함(태그관리, 시멘틱 작성)
4.부트스트랩 그리드 사용법 
5.반응형 웹 작성법
6.선택자의 우선순위에 대한 정확한 이해 부족함





