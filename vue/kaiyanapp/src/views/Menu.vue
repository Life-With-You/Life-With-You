<template>
    <div class="menu-all">
        <div class="top">
            <h4>置顶分类排序</h4>
            <span class="el-icon-arrow-left" @click="$router.go(-1)"></span>
        </div>
        <div class="all">
            <div class="item" v-for="(item, index) in list" :key="index" >
                <router-link :to="/page/+item.data.id">
                <img :src="item.data.icon">
                <span class="el-icon-more"></span>
                <div class="content">
                    <div class="title">{{item.data.title}}</div>
                    <div class="context">{{item.data.description}}</div>
                </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      list: ""
    };
  },
  created() {
     
    this.axios.get("https://api.apiopen.top/videoCategory").then(res=> {
      this.list = res.data.result.itemList;
    });
  }
};
</script>


<style lang="less" scoped>
.top {
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: solid 1px #ccc;
  > span {
    font-size: 20px;
    padding: 0 10px;
    line-height: 40px;
    z-index: 99;
    position: absolute;
    top: 0;
    left: 0;
  }
  h4 {
    text-align: center;
    margin: 0;
    line-height: 40px;
    font-weight: 900;
    font-size: 18px;
  }
}
.all {
  margin-top: 40px;
  .item {
      border-bottom: solid 1px #ccc;
    > a {
        text-decoration: none;
        color: rgb(51, 50, 50);
      > img {
        float: left;
        width: 40px;
        height: 40px;
        margin: 15px;
        border-radius: 5px;
      }
      .content {
        text-align: left;
        .title {
          padding-top: 15px;
          font-weight: 900;
          font-size: 15px;
        }
        .context {
          padding-bottom: 15px;
          color: #777;
        }
      }
      > span {
        float: right;
        font-size: 20px;
        padding-right: 15px;
        line-height: 70px;
      }
    }
  }
}
</style>
