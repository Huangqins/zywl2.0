import Vue from 'vue'
import Router from 'vue-router'

/*
路由预留扩展权限,分为任务,资产,历史信息,漏洞，知识库模块
*/

Vue.use(Router)
/* Layout */
import Layout from '../views/layout/Layout'

const constantRouterMap = [
  { path: '/login', component: () => import(/* webpackChunkName: "user" */'@/views/login')},
  { path: '/register', component: () => import(/* webpackChunkName: "user" */'@/views/register')}
]

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      name: 'Dashboard',
      children: [{
        path: 'dashboard',
        component: () => import('@/views/dashboard/index')
      }]
    }
  ].concat(constantRouterMap)
})
