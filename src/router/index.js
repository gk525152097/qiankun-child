import Vue from 'vue'
import VueRouter from 'vue-router'
import { appName } from '../systemConfig'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/login',
    name: '登陆',
    component: () => import('@/views/login/index')
  },
  {
    path: '/error',
    name: '错误',
    component: () => import('@/views/error/index')
  }
]

export default new VueRouter({
  base: window.__CAPTRUE_PAGE__ ? undefined : (window.__POWERED_BY_QIANKUN__ ? `/${appName}` : '/'),
  mode: 'history',
  routes: routes
})
