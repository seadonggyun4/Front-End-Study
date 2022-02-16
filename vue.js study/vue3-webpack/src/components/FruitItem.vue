<template>
  <div>
    <li>{{ name }}</li>
    <div>hello</div>
  </div>
</template>

<script>
export default {

  props: {
    //name 이라는 이름으로 String 데이터를 받아오겠다.
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
// scoped는 해당 컴포넌트에서만 스타일이 적용되도록한다.
  div{
    color: red
  }
</style>