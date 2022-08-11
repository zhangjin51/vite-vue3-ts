import fetch from '../service'

// 定义这一层的原因是接口复用的时候比较方便
export function docheckphone(data) {
  return fetch.request({
    url: "/user/docheckphone",
    method: 'post',
    data
  })
}

// 猜你喜欢列表数据
export function cartGetRecommendlist(data) {
  return fetch.request({
    url: "/pro/recommendlist",
    method: 'get',
    params: {
      ...data
    }
  })
}

// login
export function login(data) {
  return fetch.request({
    url: "/v2/login",
    method: 'post',
    data
  })
}


export function adminLogin(data) {
  return fetch.request({
    url: "/admin/login",
    method: 'post',
    data
  })
}

// 获取验证码
export function dosendmsgcode(data) {
  return fetch.request({
    url: "/v1/captchas",
    method: 'post',
    data
  })
}
