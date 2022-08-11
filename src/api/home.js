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

// 获取某天用户注册量 日期：格式 2017-05-29
export function getUsersCountByDate(data) {
  return fetch.request({
    url: `/statis/user/${date}/count`,
    method: 'get',
    
  })
}

// 获取所有用户注册量 
export function getUsersCount(data) {
  return fetch.request({
    url: "/v1/users/count",
    method: 'get',
    params: {
      ...data
    }
  })
}

// 获取某天订单数量 statis/order/:date/count
export function getOrdersCountByDate(data) {
  return fetch.request({
    url: `/statis/user/${date}/count`,
    method: 'get',
    
  })
}

// 获取所有订单数量 
export function getOrdersCount(data) {
  return fetch.request({
    url: "/bos/orders/count",
    method: 'get',
    params: {
      ...data
    }
  })
}

// 获取某天管理员注册量
export function getAdminsCountByDate(data) {
  return fetch.request({
    url: `/statis/admin/${date}/count`,
    method: 'get',
    
  })
}

//获取管理员总数量 
export function getAdminsCount(data) {
  return fetch.request({
    url: "/admin/count",
    method: 'get',
    params: {
      ...data
    }
  })
}