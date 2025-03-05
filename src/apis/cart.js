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

export function allSelectAPI(selected, skuIds) {
  return httpInstance({
    url: "member/cart/selected",
    method: "PUT",
    data: {
      selected,
      skuIds,
    }
  })
}

export function updateCartCountAPI(skuId, selected, count) {
  return httpInstance({
    url: "member/cart/" + skuId,
    method: "PUT",
    data: {
      selected,
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

export function mergeCartAPI(data) {
  return httpInstance({
    url: "member/cart/merge",
    method: "POST",
    data
  })
}
