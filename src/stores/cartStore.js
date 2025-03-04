import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./userStore";
import { addCartAPI, allSelectAPI, delCartAPI, getCartListAPI, mergeCartAPI, updateCartCountAPI } from "@/apis/cart";


export const useCartStore = defineStore('cart', () => {

  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userinfo.token)
  const cartList = ref([])

  const margeCart = async () => {
    await mergeCartAPI(cartList.value.map((item) => {
      return {
        skuId: item.skuId,
        selected: item.selected,
        count: item.count
      }
    }))
    getCartList()
  }

  const addCart = async (goods) => {
    if (isLogin.value) {
      const res = await addCartAPI(goods.skuId, goods.count)
      if (res.code === "1") {
        getCartList()
      }
    } else {
      const item = cartList.value.find((item) => item.skuId === goods.skuId)
      if (item) {
        item.count += goods.count
      } else {
        cartList.value.push(goods)
      }
    }
  }
  const getCartList = async () => {
    const res = await getCartListAPI()
    if (res.code === "1") {
      cartList.value = res.result
    }
  }

  const updateCartCount = async (skuId, selected, count) => {
    if (isLogin.value) {
      await updateCartCountAPI(skuId, selected, count)
    }
  }

  const delCart = async (skuId) => {
    if (isLogin.value) {
      const res = await delCartAPI([skuId])
      if (res.code === "1") {
        getCartList()
      }
    } else {
      const idx = cartList.value.findIndex((item) => (item.skuId === skuId))
      cartList.value.splice(idx, 1)
    }
  }
  const clearCart = () => {
    cartList.value = []
  }
  const checkChange = async (skuId, selected, count) => {
    if (isLogin.value) {
      await updateCartCountAPI(skuId, selected, count)
    }
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = !item.selected
  }

  const allSelect = async (selected) => {
    if (isLogin.value) {
      await allSelectAPI(selected, cartList.value.map((item) => item.skuId))
    }
    cartList.value.forEach((item) => item.selected = selected)
  }

  const selectCount = computed(() => cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count, 0))
  const selectPrice = computed(() => cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count * c.price, 0))

  const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
  const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
  const isAll = computed(() => cartList.value.every((item) => item.selected))

  return {
    allCount,
    allPrice,
    cartList,
    addCart,
    delCart,
    checkChange,
    allSelect,
    isAll,
    selectCount,
    selectPrice,
    getCartList,
    isLogin,
    clearCart,
    margeCart,
    updateCartCount
  }

}, {
  persist: true
})
