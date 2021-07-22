/**
 * vue-router守卫
 * 主要在路由跳转的时候进行处理
 */

import router from './router'
import NProgress from 'nprogress' // progress bar
import store from './store'
import createRoutes from '@/utils/createRoutes'
import transform from '@/utils/transformTree'
import { handleAppMenu } from '@/api/system'
import BaseLayout from '@/layout/BaseLayout'

import 'nprogress/nprogress.css'
import {appName} from './systemConfig'
import BlankLayout from './layout/BlankLayout'
import PageLayout from './layout/PageLayout' // progress bar style
NProgress.configure({ showSpinner: false }) // NProgress configuration

// const whiteList = [
//   '/login',
//   '/register'
// ] // 不重定向白名单

router.beforeEach(async (to, from, next) => {
  // 加载条
  NProgress.start()
  // 切换浏览窗口名称
  if (to.name) {
    // document.title = `${defaultSettings.mainSystemName} ${to.name}`
  }

  console.log('child')
  console.log(to)

  console.log(window.__CAPTRUE_PAGE__)

  // 处理是否作为子应用 判断地址是否为子应用路由
  if (!window.__CAPTRUE_PAGE__) {
    if (sessionStorage.getItem(appName) && !window.location.href.includes(appName)) {
      NProgress.done()
      return false
    }
  }

  function handleLayout () {
    if (window.__CAPTRUE_PAGE__) {
      return PageLayout
    }
    if (sessionStorage.getItem(appName)) {
      return BlankLayout
    }
    return BaseLayout
  }

  /**
   * 不存在路由信息 则重新请求
   */
  if (!store.state.system.menuTree.length) {
    const menuList = await handleAppMenu()
    const menuTree = createRoutes(transform(menuList))

    console.log(menuTree)

    // 添加入口 这里需要处理是 作为子应用 还是 独立项目
    const enterRoute = { // 通过动态菜单添加 并修改redirect
      path: '/',
      name: '首页',
      component: handleLayout(),
      redirect: menuList[0].path // 获取菜单第一个数据为默认跳转页面
    }
    router.addRoute(enterRoute)

    // 将菜单添加到入口下
    menuTree.sort((a, b) => a.rang - b.rang)
    menuTree.forEach(item => {
      router.addRoute('首页', item)
    })

    // 动态菜单
    store.commit('system/SET_MENU_TREE', menuTree)

    // 添加容错路由
    router.addRoute({ path: '*', redirect: '/error', hidden: true })

    next({...to, replace: true})
    return false
  }
  next()
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})

router.onError(error => {
  console.log(error)
})
