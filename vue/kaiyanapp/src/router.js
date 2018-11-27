import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Menu from './views/Menu.vue'
import Content from './components/Content.vue'
import Search from './components/Search.vue'
import Author from './components/Author.vue'
import Video from './components/Video.vue'
import Daily from './components/Daily.vue'
import Page from './components/Page.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Index,
      redirect: '/Daily',
      children:[{
        path:'/index/:id',
        component:Content
      },{
        path:'/daily',
        component:Daily
      }]
    },
    {
      path: '/menu',
      component: Menu
    },{
      path:'/search',
      component:Search
    }
    ,{
      path:'/author/:id',
      component:Author
    },{
      path:'/video/:id',
      component:Video
    },{
      path:'/page/:id',
      component:Page
    }
  ]
})
