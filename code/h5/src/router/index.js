import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    meta: {
      title: '首页',
      keepAlive: false
    },
    component: () =>
      import('@/page/Layout/index')
  },
  {
    path: '/ListWarp',
    meta: {
      title: 'vue-list-warp',
      keepAlive: false
    },
    component: () =>
      import('@/page/ListWarp/index')
  }
]

export const asyncRouterMap = []

export default new Router({
  routes: constantRouterMap
})
