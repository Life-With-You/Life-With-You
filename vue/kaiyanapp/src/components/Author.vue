<template>
  <div class="module">
    <div class="header">
      <div class="headPortrait">
        <img :src="headerImage" class="headerImage">
        <i class="el-icon-arrow-left exit" @click="$router.go(-1)"></i>
        <img :src="author.icon" class="author">
      </div>
      <el-row>  
        <h3>{{author.name}}</h3>
        <el-button class="btn-right" icon="el-icon-plus" >关注</el-button> 
      </el-row>
      <p class="description">{{author.description}}</p>

    </div>
    <hr>
    <h3 class="t">相关作品</h3>
    <div v-for="(item, index) in x" :key="index" class="list">
        <li v-if="item.type!=='textCard'">
          <div class="intro">
            <img :src="item.data.author.icon" class="author">
            <p>
              <strong class="authorname">{{item.data.author.name}}</strong><br>
              <span class="biaoti">标题:</span>       <strong class="videoname">{{item.data.title}}</strong>
            </p>
          </div>
          <p class="contentIntro">{{item.data.description}}</p>
          <router-link :to="/video/+item.data.id" ><img :src="item.data.cover.feed" v-if="item.data.cover.feed">
          <span>{{getTime(item.data.duration)}}</span>
        </router-link>
          <el-row>
            <el-button class="btn-left" icon="el-icon-star-off"  @click="item.data.consumption.collectionCount++"><span>{{item.data.consumption.collectionCount}}</span></el-button>
            <el-button class="btn-left" icon="el-icon-edit-outline"  @click="item.data.consumption.replyCount++"><span>{{item.data.consumption.replyCount}}</span></el-button>
            <el-button class="btn-right" icon="el-icon-share" ></el-button> 
          </el-row>
        <hr>
        </li>    
    </div>
  </div>
</template>
<style lang="less" scoped>
.module {
  .header {
    padding: 0;
    .headPortrait {
      position: relative;
      width: 100%;
      height: 150px;
        .headerImage{
          width: 100%;
          height: 100%;
        }

      .exit {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px;
        color: grey;
        font-size: 30px;
      }
      .author {
        position: absolute;
        bottom: -10px;
        border: 2px solid white;
        border-radius: 50%;
        display: block;
        width: 20%;
      }
    }
    .el-row {
      padding: 0 10px;
      margin-top: 15px;
      h3 {
        margin: 0;
        float: left;
      }
      .el-button {
        font-size: 14px;
        float: right;
        padding: 5px;
      }
    }
    .description {
      padding: 0 10px;
      margin: 2px 0;
      font-size: 12px;
      text-align: left;
    }
  }
  .t {
            padding-left:5px; 
    text-align: left;
    margin: 10px 5px;
    color: black;
  }

  .list {
    padding: 0 10px;
    overflow: hidden;
    position: relative;
    li {
      position: relative;
      list-style: none;
      .intro {
        .author {
          float: left;
          border-radius: 50%;
          display: block;
          width: 10%;
        }
        p {
          margin: 5px 0 0 0;
          text-align: left;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          .authorname {
            font-size: 14px;
            padding-left: 10px;
          }
          .videoname {
            font-size: 12px;
            padding-left: 10px;
          }
          span {
            padding-left: 3px;
          }
          .zuozhe {
            font-size: 14px;
          }
          .biaoti {
            font-size: 12px;
          }
        }
      }
      .contentIntro {
        margin: 2px 0;
        font-size: 12px;
        float: left;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-align: left;
      }

      a {
        width: 100%;
        overflow: hidden;
        img {
          display: block;
          border-radius: 10px;
          width: 100%;
          height: 200px;
        }
        span {
          display: block;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          position: absolute;
          bottom: 70px;
          right: 10px;
          border-radius: 10px;
          padding: 5px;
        }
      }
      .el-row {
        padding: 5px 0;
        .el-button {
          margin: 0 5px 0 0;
          font-size: 12px;
          float: left;
        }
        .btn-right {
          float: right;
          margin: 0;
        }
      }
    }
    hr {
      margin: 5px 0 10px 0;
    }
  }
}
</style>
<script>
export default {
  data: function() {
    return {
      x: "",
      author: "",
      headerImage:""
    };
  },
  created() {
    this.axios
      .get("https://api.apiopen.top/videoRecommend" ,{
        params: {
            id: this.$route.params.id
          }
      })
      .then(req => {
        this.x = req.data.result;
        this.author = req.data.result[1].data.author;
        this.headerImage = req.data.result[1].data.tags[0].headerImage
      });
  },
  methods: {
    getTime: function(s) {
      var h;
      h = Math.floor(s / 60);
      s = s % 60;
      h += "";
      s += "";
      h = h.length == 1 ? "0" + h : h;
      s = s.length == 1 ? "0" + s : s;
      return h + ":" + s;
    }
  }
};
</script>