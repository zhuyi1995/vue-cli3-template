// axios 实例1
import axios from 'axios'
import store from '../store/index'
import {Notification} from "element-ui";

// 设定访问根地址
let baseUrl = window.location.origin;
const windowUrl = window.location.origin;
if (process.env.NODE_ENV === 'production') {
  // 多个生产环境时
  if (windowUrl === 'https://**.medsci.cn') {
    baseUrl = 'https://**.medsci.cn/';
  }
  else {
    baseUrl = "http://**/"
  }
}
const service = axios.create({
  baseURL: baseUrl,
  timeout: 15000
})

// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['Authorization'] = store.getters.token
  }
  return config
}, error => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
      if (response.status !== 200) {
        if (response.status === 508 || response.status === 512 || response.status === 514) {
          store.dispatch('FedLogOut').then(() => {
            location.reload()
          })
        }
        return Promise.reject('error')
      }
      else {
        return response.data
      }
    },
    error => {
      if (error.response.data.message || error.response.data.massage) {
        Notification({
          title: error.response.data.status,
          message: error.response.data.message || error.response.data.massage,
          type: 'warning',
          position: 'bottom-right'
        })
        if (error.response.data.massage === 'Token has expired') {
          store.dispatch('FedLogOut').then(() => {
            location.reload()
          })
        }
      }
      return Promise.reject(error)
    }
)

export default service
