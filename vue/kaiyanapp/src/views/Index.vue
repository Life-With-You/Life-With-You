<template>
  <div class="">
    <Header></Header>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue"

export default {
  components: {
    Header
  }
}
</script>

<style lang="less" scoped>
.content{
  margin-top: 40px;
}
</style>

