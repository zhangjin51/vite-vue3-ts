// 使用封装好的 axios （已设置默认选项）
import axios from './axios'

class Xhr {
  // 单例模式
  static getInstance() {
    if (!this.instance) {
      this.instance = new Xhr()
    }
    return this.instance
  }

  // 设置请求缓存
  constructor() {
    this.cache = new Map()
  }

  /**
   * 请求方法： 
   *  get类型options携带params参数作为数据对象， 
   *  post类型options携带data参数作为数据对象
   */
  request(options) {
    // 对get请求做一层缓存，允许post请求添加相同的数据
    const {
      method,
      url,
      params
    } = options
    let accessKey = url
    // 如果是get请求且有参数，要换缓存到参数，
    // 否则所有该url的请求都返回同一数据
    // post 请求是添加数据不需要缓存
    if (method === 'get' && params) {
      for (let key in params) {
        accessKey += key + params[key]
      }
    }

    // 这里借鉴了vue源码的watcher
    if (this.cache.has(accessKey)) {
      return Promise.resolve(this.cache.get(accessKey))
    }

    return axios(options).then((res) => {
      if (method === 'get') {
        this.cache.set(accessKey, res)
      }
      return res
    })
  }
}

export default Xhr.getInstance()