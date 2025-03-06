import request from '@/utils/http'

//获取详情接口
export const getCheckOutInfoAPI = () => {
  return request({
    url: "member/order/pre"
  })
}

//获取详情接口
export const createOrderAPI = (data) => {
  return request({
    url: "member/order",
    method: "POST",
    data
  })
}
