<template>
 <div class="container" :style="'backgroundImage:url('+lately1.coverBlurred+')'">
      <div class="container-head">
        <div class="player">
   <video webkit-playsinline playsinline="true"  :src="lately1.playUrl" controls></video>
  
  </div>
  </div>
  <div class="video-info">
    <div class="video-positioner">
      <div class="video-meta">
        <h2>{{lately1.title}}</h2>
        <div class="divider-short"></div>
        <p>{{lately1.category}} / {{getTime(lately1.duration)}}</p>
    <p class="description">{{lately1.description}}</p>
      </div>
    </div>
<div class="divider"></div>
  </div>
  <div class="divider"></div>
  <div class="list-positioner">
    <div class="list">
            <div class="relata" v-for="(item, index) in lately" :key="index">
             <router-link :to="/video/+item.id">
                <div class="cove"><img :src="item.coverForDetail"></div>
                <div class="meta">
                    <div class="title">{{item.title}}</div>
                    <div class="tategory"> #{{item.category}} / #{{item.author.name}}</div>
                </div>
                </router-link>
            </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      lately: "",
      lately1: "",
      id: this.$route.params.id
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.id = to.params.id;
    this.setData();
    next();
  },
  methods: {
    setData() {
      this.axios
        .get("http://baobab.wandoujia.com/api/v1/video/related/" + this.id , {
          params: {
            num: 5
          }
        })
        .then(response => {
          this.lately = response.data.videoList;
        });
        this.axios
          .get("http://baobab.wandoujia.com/api/v1/video/" + this.id)
          .then(res => {
            this.lately1 = res.data;
          });
    },
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
  },
  created() {
    this.axios
      .get("http://baobab.wandoujia.com/api/v1/video/related/" + this.id, {
        params: {
          num: 5
        }
      })
      .then(response => {
        this.lately = response.data.videoList;
      });
      this.axios
        .get("http://baobab.wandoujia.com/api/v1/video/" + this.id)
        .then(res => {
          this.lately1 = res.data;
        });
  }
};
</script>

<style scoped>
body {
  font-family: sans-serif;
  font-size: 13px;
  line-height: 1.5;
}
.container {
  background-size: cover ; 
  background-repeat: repeat-y;
  margin: 0 auto;
  max-width: 700px;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
.container-head {
  width: 100%;
  background: #333;
}
.player {
  width: 100%;
  height: 202px;
  left: 50%;
  overflow: hidden;
  position: relative;
  transform: translate(-50%);
}

.player video {
  height: 100%;
  position: absolute;
  width: 100%;
  left: 0;
}

.video-info {
  position: relative;
}
.video-meta {
  background: rgba(0, 0, 0, 0.2);
  padding: 15px;
  padding-bottom: 4px;
}
.video-meta h2 {
  font-size: 18px;
  margin: 0;
  margin-bottom: 7px;
  color: #fff;
}
.divider-short {
  width: 40px;
  height: 1px;
  transform: scaleY(0.5);
  background: #fff;
  
}
.video-meta p {
  margin-right: 239px;
  color: #fff;
}
.description {
  width: 100%;
  height: 100%;
  word-break: break-word;
  margin-bottom: 11px;
  opacity: 0.85;
}
.divider {
  height: 1px;
  transform: scaleY(0.5);
  background: #fff;
}
.list {
  background: rgba(0, 0, 0,0.3);
  padding: 20px 15px 10px;
}
.list .relata {
  position: relative;
  margin-bottom: 20px;
}
.list .relata .cove img {
  border: 1px solid hsla(0, 0%, 100%, 0.3);
  width: 45%;
  height: 90px;
}
.meta {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: 12px;
  transform: translateY(-50%); /*向上移动*/
}
.meta .title {
  color: white;
  font-weight: bold;
}
.meta .tategory {
  opacity: 0.85;
  color: #fff;
}
</style>

