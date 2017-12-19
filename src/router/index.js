import Vue from 'vue'
import Router from 'vue-router'
import Personal from '@/components/pages/personal.vue'
import Carts from '@/components/pages/carts.vue'
import Views from '@/components/pages/views.vue'
import Home from '@/components/pages/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {//首页
      path: '/home',
      name: 'home',
      component:Home
    },
    {//购物车
      path: '/carts',
      name: 'carts',
      component:Carts
    },
    {//发现
      path: '/views',
      name: 'views',
      component:Views
    },
    {//个人中心
      path: '/personal',
      name: 'personal',
      component:Personal
    },
    {//地址为空时跳转home页面
        path:'',
        redirect: '/home'
    }
  ]
})
