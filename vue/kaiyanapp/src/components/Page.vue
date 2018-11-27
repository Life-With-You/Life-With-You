<template>
<div>
  <div class="header">
    <img :src="list.icon" class="bg">
        <i class="el-icon-arrow-left exit" @click="$router.go(-1)"></i>
        <h2>{{list.title}}</h2>
        <p>{{list.description}}</p>
  </div>
  <div>
    <Content></Content>
  </div>
  </div>
</template>

<script>
import Content from './Content.vue'

export default {
  components:{
      Content
  },
  data:function () {
    return{
      list:''
    }
  },
    created() {
      this.axios.get("https://api.apiopen.top/videoCategory").then(res=> {
        for (let i in res.data.result.itemList) {
          if (res.data.result.itemList[i].data.id == this.$route.params.id) {
            this.list = res.data.result.itemList[i].data;
          }
        }
    })
    },
    methods:{
      
    }
}
</script>


<style lang="less" scoped>
.header {
  position: relative;
  .bg {
    width: 100%;
    height: 200px;
  }
  .exit {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    color: white;
    font-size: 30px;
  }
  h2 {
    color: white;
    position: absolute;
    top: 60px;
    left: 40%;
  }

  p {
    color: white;
    position: absolute;
    top: 100px;
    left: 25%;
  }
}
</style>