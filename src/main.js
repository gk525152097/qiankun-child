import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import element, { Message } from 'element-ui'
import GlobalCard from '@/components/GlobalCard'
import { appName } from './systemConfig'
import globalAction from './qiankun'

import './permission'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import './assets/scss/vueTransition.scss'
import './assets/scss/common.scss'
import './assets/scss/gk-theme.scss'

Vue.use(element)
Vue.use(Vuex)
Vue.use(GlobalCard)

Vue.config.productionTip = false
Vue.prototype.$isChild = false // 判断是否为子应用
Vue.prototype.$message = Message

let instance = null

function render (props, { container } = {}) {
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#appContainer') : '#appContainer')
}

if (window.__POWERED_BY_QIANKUN__) {
  /* eslint-disable */
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
  /* eslint-disable */
} else {
  render()
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap (props) {
  console.log(`bootstrap-${appName}`)
  window._BASE_PATH__ = window._CHIlD_BASE_PATH__
  window.__SINGLR_PAGE__ = props.singlePage
  handleInitChild(props)
}

/**
 * 初始化 子应用
 * @param props 主应用传入参数
 */
function handleInitChild (props) {
  Vue.prototype.$isChild = true // 判断是否为子应用
  const { jumpRouter, globalState, setGlobalState } = props
  if (jumpRouter) {
    Vue.prototype.$jumpRouter = jumpRouter // 跳转方式
  }
  if (globalState) {
    store.commit('global/HANDLE_DATA', globalState.globalData) // 用于数据初始化
    Vue.prototype.$setGlobalState = setGlobalState // 用于修改全局状态
  }
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount (props) {
  console.log(`mount-${appName}`)
  globalAction.setActions(props)
  globalAction.onGlobalStateChange((state, prev) => {
    console.log('子应用 qiankun 响应')
    store.commit('global/HANDLE_DATA', state)
  })
  render(props)
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount (props) {
  console.log(`unmount-${appName}`)
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update (props) {
  console.log(`update-${appName}`)
  console.log('update props', props)
}
