import axios from 'axios';
import qs from 'qs'
// import router from '@/router'

switch (process.env.NODE_ENV) {
  case 'production':
    axios.defaults.baseURL = 'https://elm.cangdu.org/api';
    break
  default:
    axios.defaults.baseURL = '/api';
    break
}

// 设置超时时间
axios.defaults.timeout = 5000;
// 设置跨域是否需要携带凭证
axios.defaults.withCredentials = false
// 设置传递数据的请求格式
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
// 同时需要为post请求单独设置格式转换(只对post请求生效)
// 当后端希望get和post请求都已get请求的格式传递数据时（xxx=ddd&ddd=xxx）
axios.defaults.transformRequest = data => qs.stringify(data)

// 设置请求拦截器，
axios.interceptors.request.use((config) => {
  // 进行token校验（JWT）：接收服务器返回的token，存储到本地，每次发送请求，都需要带上token
  // token && (config.headers.Authorization = token)
  // config需要返回
  return config
}, error => {
  // 请求错误的操作，返回报错信息
  return Promise.reject(error)
})

// 设置判断是否响应成功的校验,3开头的代码一般都不在接口里面返回，一般都是资源类数据会返回
axios.defaults.validateStatus = status => {
  return /^2|3\d{2}$/.test(status)
}

// 设置响应拦截器
/**
 * response 包含内容：
 * response: {
 *  data: 响应主体内容，一般都是后端返回的数据
 *  status： 服务器相应的状态码
 *  statusText: 响应状态码的描述，
 *  headers：服务器响应头
 *  config: 之前发送请求是发送给服务器的配置对象
 *  request: 原生的ajax对象
 * }
 *  
 */
axios.interceptors.response.use((response) => {
  console.log('***', response)
  // router.replace('/login')
  return response.data;
}, error => {
  let {
    response
  } = error;
  // 如果返回了response，证明服务器返回了结果，可以通过返回的状态码判断
  if (response) {
    switch (response.status) {
      // 当前请求用户需要验证，一般为需要验证用户(未登录)
      case 401:
        break;
        // 服务器接收到请求，但拒绝处理，一般为登录状态过期（token失效）
      case 403:
        localStorage.removeItem('token')
        break;
        // 找不到资源，
      case 404:
        break;
    }
  } else {
    // 说明服务器连结果都没有返回，可能的原因有两种：
    /**
     * 1. 服务器崩掉了
     * 2. 前端客户端断网状态
     */
    if (!window.navigator.onLine) {
      // 判断为断网，可以跳转到断网页面
      return
    } else {
      console.log('!@#someerror')
      return Promise.reject(error)
    }
  }
})

export default axios