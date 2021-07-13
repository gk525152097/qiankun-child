/**
 * 请求封装
 * 实例配置: 设置baseUrl 和 timeout
 * 请求拦截: 为深入配置 可进行token配置
 * 响应拦截: 与后台进行配置 主要拦截 response status异常 以及 返回结果错误
 */

import axios from 'axios'
import router from '../router'
import { message } from 'element-ui'

// 创建axios实例 初始化默认值
const service = axios.create({
  withCredentials: true,
  baseURL: process.env.BASE_URL,
  timeout: 60000, // 请求超时时间
  method: 'POST'
})

const routerLink = function (type) {
  router.push({ path: '/error', query: { type: type } })
}

// request拦截器
service.interceptors.request.use(
  config => {
    /**
     * 在request.headers添加安全网关code
     */
    if (sessionStorage.getItem('authorization')) {
      config.headers.authorization = sessionStorage.getItem('authorization')
    }
    if (config.formData) {
      const data = config.data
      const formData = new FormData()
      for (let key in data) {
        formData.append(key, data[key])
      }
      config.data = formData
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * 获取安全网关code
     */
    if (response.headers.authorization) sessionStorage.setItem('authorization', response.headers.authorization)

    const res = response.data
    if (res.code !== 200) {
      message(res.msg)
      return Promise.reject(res)
    } else {
      return res.data
    }
  },
  error => {
    const errorResponse = error.response
    switch (errorResponse.status) {
      case 400: // 入参错误
        break
      case 401: // 无权限
        sessionStorage.clear()
        break
      case 403: // 禁止
        break
      case 404: // 找不到
        break
      case 500: // 接口错误
        break
      case 502: // bed gateway 网关错误
        break
      case 503: // 服务器过载
        break
    }
    routerLink(errorResponse.status)
    return Promise.reject(error)
  }
)

export default service
