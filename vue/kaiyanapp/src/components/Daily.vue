<template>
    <div id="app">
        <div class="recently" v-for="(item, index) in dailt" :key="index" >
          <div v-if="index!=0">
            <!-- 图片视频链接 -->
            <h2 v-if="item.type ==='textCard'">{{item.data.text}}</h2>
            <div v-if="item.type ==='followCard'">
                <router-link :to="/video/+item.data.header.id">
                    <img class="" :src="item.data.content.data.cover.detail">
               </router-link>
                <!-- 作者 -->
                  <router-link :to="/author/+item.data.content.data.author.id" class="writer">
                    <div class="authro">
                        <img :src="item.data.header.icon">
                        <div class="authro-name">
                            <h3>{{item.data.header.title}}</h3>
                            <span>{{item.data.header.description}}</span>
                        </div>
                    </div>
                    <!-- 图标 -->
                </router-link>
            </div>
            <hr v-if="item.type ==='followCard'">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      dailt: "",
      ande: "",
      type: "textCard"
    };
  },
  computed: {},
  created() {
    this.axios.get("https://api.apiopen.top/todayVideo").then(response => {
      this.dailt = response.data.result;
    });
  }
};
</script>

<style lang="less" scoped>
#app {
  margin: 10px;
    margin-top: 50px;
  a{
    color: rgb(53, 53, 53);
  }
  h2 {
    margin: 10px 0;
  }
  .recently {
    // 图片视频链接
    a {
      img {
        width: 100%;
        height: 200px;
        border-radius: 10px;
      }
    }
    // 作者
    .writer {
      height: 63px;
      .authro {
        float: left;
        width: 90%;
        margin: 8px 0;
        img {
          width: 50px;
          height: 50px;
          float: left;
          margin-right: 5px;
          border-radius: 50%;
        }
        .authro-name {
          margin-top: 3px;
          h3 {
            margin: 0;
            height: 28px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
          span {
            color: #ccc;
            font-size: 13px;
          }
        }
      }
      // 图标，分享
      .el-icon-share {
        font-size: 25px;
        text-align: center;
        line-height: 63px;
        margin: 0 auto;
        width: 10%;
        text-decoration-line: none;
        float: right;
      }
    }
    hr {
      clear: both;
      margin: 6px 0;
    }
  }
}
</style>