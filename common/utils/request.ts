//文档地址：http://www.axios-js.com/zh-cn/docs/
import axios, { type AxiosRequestConfig } from 'axios'
// import { ElNotification } from 'element-plus'
import { ElMessage } from 'element-plus'

// 创建axios实列
const axiosConfig: AxiosRequestConfig = {
  // baseURL: import.meta.env.VITE_HTTP_URL || '',
  baseURL: '',
  timeout: 1 * 60 * 1000
  // withCredentials: true,
}
const instance = axios.create(axiosConfig)
const AUTH_TOKEN = localStorage.getItem('token') || ''
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截
instance.interceptors.response.use(
  (res) => {
    const result = res.data ? res.data : res
    const msg = result.message || '接口异常，请联系管理员'
    if (result.code >= 400) {
      ElMessage({ message: msg, type: 'error' })
      return Promise.reject(result)
    }
    return result
  },
  (error) => {
    const msg = error.message || '接口异常，请联系管理员'
    ElMessage({ message: msg, type: 'error' })
    return Promise.reject(error)
  }
)
const request = instance
export default request
