<template>
  <!-- {{}}는 js에서 오는 데이터라는 뜻이다. -->
  <!-- h1 내부 click은 h1 태그를 click 할때마다 increase라는 메소드를 호출한다. -->
  <!-- 요소 여러개 생성 안된다는 오류 발생시 하나의 div 내부에 다 넣는 방식으로도 해결 가능 -->
  <div>
    <h1 @click="increase">
      {{ count }}
    </h1>
    <!-- vue 에서 사용 가능한 if문 = 디렉티브 -->
    <div v-if="count > 4">
      4보다 큽니다!
    </div>
    <ul>
      <!-- vue 에서 사용가능한 for문 -->
      <!-- v-for= 데이터를담을 변수 in 반복할데이터 -->
      <!-- key는 각 값이 고유한지 확인한다 -->
      <hello
        v-for="fruit in fruits"
        :key="fruit"
        :name="fruit">
        {{ fruit }}
      </hello>
      <!-- 받아온 FruitItem 즉 hello를 사용 => String으로 받아온 name 에 fruit를 할당 -->
    </ul>
  </div>
</template>

<script>
// components FruitItem을 받아온다
import FruitItem from '~/components/FruitItem.vue'

export default {
  components: {
    // 받아온 FruitItem을 hello라는 이름으로 할당
    hello: FruitItem
  },

  //data 메소드는 데이터를 정의하는 목적의 메소드
  data(){
    return{
      count: 0,
      fruits: ['Apple', "Banana", "Cherry"]
    }
  },
  //메소드를 정의
  methods: {
    //increase 메소드 생성
    //increase는 데이터를 핸들링 하기위한 "데이터 핸들러"메소드
    increase(){
      // this는 현재 script 내부를 의미
      //count는 data 메소드에서 만들어둔 count 값
      // 즉 increase 메소드가 실행될때마다 count 값에 1씩 더한값을 반환하게 된다.
      this.count += 1
    }
  }
}
</script>


<style lang="scss">
  // style 태그를 scss문법으로 해석

  h1{
    font-size: 50px;
    color: royalblue;
  }

  ul{
    li{
      font-size: 20px;
      color: yellowgreen;
    }
  }
</style>