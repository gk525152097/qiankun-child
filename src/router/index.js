import Vue from 'vue'
import VueRouter from 'vue-router'

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
  base: window._CHIlD_BASE_PATH__ || '/',
  mode: 'history',
  routes: routes
})
