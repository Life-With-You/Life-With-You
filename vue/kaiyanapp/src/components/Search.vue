<template>
    <div>
        <div class="header">
            <span class="exit" @click="$router.go(-1)" >取消</span>
            <div class="ss">
                <el-input placeholder="搜索视频、作者、用户及标签" clearable v-model="id" @keyup.enter.native="go"></el-input>
            </div>
        </div>
        <div class="list">
           <div class="list-c">
                <a>删除</a>
                <h4>搜索历史</h4>
           </div>
           <div class="ls">
               <span>qqq</span>
           </div>
        </div>
        <div class="list">
           <div class="list-c">
                <h4>热搜关键词</h4>
           </div>
           <div class="ls">
               <span>没事</span>
               <span>旅行</span>
               <span>生活小技巧</span>
               <span>健身</span>
               <span>汽车</span>
               <span>广告</span>
               <span>动画</span>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    data:function () {
        return{
            id:null
        }
    },
    methods:{
        go(){
            window.location.href="author/"+this.id
        }
    }
}
</script>


<style lang="less" scoped>
.header {
    padding: 5px 0;
  .exit {
    width: 60px;
    float: right;
    line-height: 40px;
    text-align: center;
  }
  .ss {
    width: 300px;
    overflow: hidden;
    transform: scale(0.9);
  }
}
.list{
    .list-c{
        padding: 10px 10px ;
        >a{
            float:right;
            line-height: 33px;
            color: blue;
        }
        >h4{
            margin: 0;
            font-size: 24px;
            font-weight: 900;
            line-height: 33px;
        }
    }
     .ls{
         >span{
             display: block;
             line-height: 30px;
             color: blue;
             font-weight: 700;
             margin: 0 10px ;
             padding: 5px 0;
             border-bottom: 1px solid rgb(233, 229, 229);
         }
     }
}
</style>
