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

  const checkChange = (skuId, selected) => {
    console.log(skuId, selected);

    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = !item.selected

    // 注释的是我自己实现的全选
    // let b = true;
    // cartList.value.forEach((item) => {
    //   if (!item.selected) {
    //     b = false;
    //   }
    // })
    // allSelected.value = b
  }

  const allSelect = (selected) => {
    cartList.value.forEach((item) => item.selected = selected)
  }
  // const allSelected = ref(true)

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
    // allSelected
    isAll
  }

}, {
  persist: true
})
