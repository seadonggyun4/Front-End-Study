<template>
  <!-- computed로 지정한 값을 v-if 문 에서 사용 가능하다. -->
  <section v-if="hasFruit">
    <h1>Fruits</h1>
    <ul>
      <!-- v-for문 -->
      <li
        v-for="fruit in fruits"
        :key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </section>

  <section>
    <h1>Reverse Fruits</h1>
    <ul>
      <li
        v-for="fruit in reverseFruits"
        :key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data(){
    return{
      fruits: [
        'Apple', 'Banana', 'Cherry'
      ]
    }
  },
  // computed는 data()로 정의한 데이터를 계산하고 그 계산한 값을 반환하여 사용할수 있게 한다.
  computed: {
    hasFruit(){
      // 비교연산후 나온 boolean 데이터가 반환된다
      return this.fruits.length > 0
    },
    reverseFruits(){
      // 각 글자를 뒤집는 연산이다.
      return this.fruits.map(fruit => {
        return fruit.split('').reverse().join('')
      })
    }
  }
}
</script>