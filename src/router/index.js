import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

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

export default new Router({
  base: window._CHIlD_BASE_PATH__ || '/',
  mode: 'history',
  routes: routes
})
