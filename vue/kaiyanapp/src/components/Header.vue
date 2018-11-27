<template>
    <div class="header">
        <router-link to="/menu" class="el-icon-menu menu"></router-link>
        <router-link to="/search" class="el-icon-search search"></router-link>
        <div class="nav">
            <router-link  to="/daily">日报</router-link>
            <router-link  :to="/index/+item.data.id" v-for="(item, index) in list" :key="index">{{parseTitle(item.data.title)}}</router-link>          
        </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      list: {}
    };
  },
  methods: {
    parseTitle:function (x) {
      return x.replace('#','')
    }
  },
  created() {
    this.axios.get("https://api.apiopen.top/videoCategory").then(req => {
      this.list = req.data.result.itemList;
    });
  }
};
</script>


<style lang="less" scoped>
.header {
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  border-bottom: solid 1px #ccc;
  a {
    color: #2c3e50;
    text-decoration: none;
  }
  a:visited {
    color: #2c3e50;
  }
  > .menu {
    float: left;
    padding: 0 13px;
    line-height: 40px;
  }
  .nav {
    overflow: hidden;
    white-space: nowrap;
    overflow-x: scroll;
    > a {
      line-height: 40px;
      margin: 0 13px;
      padding: 5px 0;
    }
    .router-link-active {
      border-bottom: solid 3px #2c3e50;
      color: black;
    }
  }
  .nav::-webkit-scrollbar {
    display: none;
  }

  > .search {
    float: right;
    font-size: 20px;
    line-height: 40px;
    padding: 0 10px;
  }
}
</style>