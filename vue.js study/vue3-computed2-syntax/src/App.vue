<template>
  <!-- 머스테시 연산자 내부에서 바로 값을 연산하는 행위 즉 computed 가 가능하다. -->
  <h1>{{ msg + '??' }}</h1>
  <h1>{{ msg.split('').reverse().join('') }}</h1>


  <!-- methods 사용 -->
  <h1>{{ reverseMesssage() }}</h1>
  <h1>{{ reverseMesssage() }}</h1>

  <!-- computed 사용 -->
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
</template>

<script>
export default {
  data(){
    return{
      msg: 'Hello Computed!!'
    }
  },
  computed:{
    // computed는 계산된 결과를 다시한번 호출할때 또다시 계산하지 않고 보관하고 있던 값을 리턴한다 => 캐싱
    // 캐싱 기능을 통해 데이터 최적화 가능
    reversedMessage(){
      return this.msg.split('').reverse().join('')
    }
  },
  methods: {
    // 메서드는 같은 계산과 같은 결과값이더라도 호출할때마다 계산한다 => 컴퓨터에 부하가 걸릴수 있다.
    reverseMesssage(){
      return this.msg.split('').reverse().join('')
    }
  }
}
</script>