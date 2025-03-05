import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useCartStore = defineStore('cart', () => {

  const cartList = ref([])

  const addCart = (goods) => {
    const item = cartList.value.find((item) => item.skuId === goods.skuId)
    if (item) {
      item.count += goods.count
    } else {
      cartList.value.push(goods)
    }
  }

  const delCart = (skuId) => {
    const idx = cartList.value.findIndex((item) => (item.skuId === skuId))
    cartList.value.splice(idx, 1)
  }

  const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
  const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))


  return {
    allCount,
    allPrice,
    cartList,
    addCart,
    delCart
  }

}, {
  persist: true
})
