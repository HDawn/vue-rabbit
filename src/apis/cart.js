import httpInstance from "@/utils/http"

export function addCartAPI(skuId, count) {
  return httpInstance({
    url: "member/cart",
    method: "POST",
    data: {
      skuId,
      count,
    }
  })
}

export function getCartListAPI() {
  return httpInstance({
    url: "member/cart"
  })
}

export function delCartAPI(ids) {
  return httpInstance({
    url: "member/cart",
    method: "DELETE",
    data: {
      ids
    }
  })
}
