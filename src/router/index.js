import Vue from 'vue'
import Router from 'vue-router'
import Personal from '@/components/pages/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
    },
    {
      path: '/personal',
      name: 'personal',
      components:Personal
    },
    //地址为空时跳转home页面
    {
        path: '',
        redirect: '/'
    }
  ]
})
