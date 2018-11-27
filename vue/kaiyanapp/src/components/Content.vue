<template>
<div class="xxx">
	<h2>最近更新</h2>
	<div class="recently" v-for="item in lately" :key="item.id">
		<!-- 图片视频链接 -->
		<router-link :to="/video/+item.id">
			<img class="" :src="item.data.content.data.cover.detail">
		</router-link>
		<!-- 作者 -->
		<div class="writer">
			<div class="authro">
				<img :src="item.data.header.icon">
        <router-link :to="/author/+item.id">
				<div class="authro-name">
					<h3>{{item.data.header.title}}</h3>
					<span>{{item.data.header.description}}</span>
				</div>
        </router-link>
			</div>
			<!-- 图标 -->
      
			<router-link to="./sss" class="el-icon-share">
			</router-link>
		</div>
		<hr>
	</div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      lately: ""
    };
  },
  beforeRouteUpdate (to, from, next){
    next();
    this.setData()
  },
  methods: {
    setData() {
      this.axios
        .get("https://api.apiopen.top/videoCategoryDetails", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(response => {
          this.lately = response.data.result
        });
    }
  },
  created() {
    this.axios
      .get("https://api.apiopen.top/videoCategoryDetails", {
        params: {
          id: this.$route.params.id
        }
      })
      .then(response => {
        this.lately = response.data.result;
      });
  }
};
</script>

<style scoped lang="less">
.xxx {
  margin: 10px;
  margin-top: 50px;
  h2 {
    margin: 0;
    margin-bottom: 10px;
  }
  .recently {
    // 图片视频链接
    a {
      text-decoration-line: none;
      color: rgb(53, 53, 53);
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
