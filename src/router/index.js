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

function handleBase () {
  if (window.__CAPTRUE_PAGE__) {
    return undefined
  }
  if (window.__POWERED_BY_QIANKUN__) {
    return `/${appName}`
  }
  return '/'
}

export default new VueRouter({
  base: handleBase(),
  mode: 'history',
  routes: routes
})
