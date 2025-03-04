import httpInstance from "@/utils/http"

export function getBannerApi(params = {}) {
  const { distributionSite = '1' } = params
  return httpInstance({
    url: 'home/banner',
    params: {
      distributionSite
    }
  })
}

/**
 * 新鲜好物
 */
export function findNewAPI() {
  return httpInstance({
    url: "home/new"
  })
}
/**
 * 获取人气推荐
 */
export const getHotAPI = () => {
  return httpInstance("home/hot")
}

/**
 * goods
 */
export const getGoodsAPI = () => {
  return httpInstance("home/goods")
}
