<template>
  <!-- ============================================= 어플리케이션 & 라이프 사이클 훅 ============================================= -->
  <h1>{{ count }}</h1>
</template>

<script>
export default {
  data(){
    return{
      count:2
    }
  },
  beforeCreate(){
    //beforecreated는 라이프 사이클 훅 중 하나 이다.
    console.log('BeforeCreated!!',this.count) // undefined
    // 인스턴스 값이 지정되기 전의 라이프 사이클 이라 count 값이 없다.
  },
  created(){
    //created는 라이프 사이클 훅 중 하나 이다.
    console.log('Created!!',this.count)
  },
  beforeMount(){
    //beforemounted는 라이프 사이클 훅 중 하나 이다.
    console.log('BeforeMounted!!', document.querySelector('h1')) //undefined
    // 현재 컴포넌트가 html 구조에 아직 연결되지 않았기 때문에 h1태그를 읽지 못한다.

  },
  mounted(){
    //mounted는 라이프 사이클 훅 중 하나 이다.
    console.log('Mounted!!', document.querySelector('h1'))
  }
}
</script>