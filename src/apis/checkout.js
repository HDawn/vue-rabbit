import request from '@/utils/http'

//获取详情接口
export const getCheckOutInfoAPI = () => {
  return request({
    url: "member/order/pre"
  })
}
