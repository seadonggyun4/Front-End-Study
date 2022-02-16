<template>
  <!-- ============================================= 템플릿 문법 ============================================= -->
  <div>
    <!-- "v-once"는 이중 중괄호 구문 값이 갱신되더라도 초기 값을 유지하는 문법 -->
    <!-- click은 "v-on" 을 사용한 것으로 앞에 @를 붙히면 생략 가능 해서 약어 처리된 상태 이다. -->
    <h1
      v-once
      @click="add">
      {{ msg }}
    </h1>

    <!-- html 의 태그가 html로 해석되기 위해서는 "v-html을 사용" -->
    <h1
      v-html="msg">
    </h1>

    <!-- 데이터msg를 템플릿 태그의 속성값으로 사용하기 위해 "v-bind"사용 -->
    <!-- v-bind 가 안보이는것은 약어 처리 -->
    <!-- attr = class 이다. attr이라는 데이터를 활용한 것처럼 특정 데이터를 속성처럼 사용할 수도 있다, -->
    <h1 :[attr]="msg2">
      {{ msg2 }}
    </h1>
  </div>
</template>


<script>
export default {
  data(){
    return{
      msg: '<div style="color: red;">Hello!!</div>',
      msg2: 'active',
      attr: 'class'
    }
  },
  methods: {
    add(){
      this.msg += '!' 
    }
  }
}
</script>


<style scoped>
  .active{
    color: royalblue;
    font-size: 50px;
  }
</style>