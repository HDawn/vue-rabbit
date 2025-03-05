import { loginAPI } from "@/apis/login";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useCartStore } from "./cartStore";


export const useUserStore = defineStore('user', () => {
  const cartstore = useCartStore()

  const userinfo = ref({})
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userinfo.value = res.result

    cartstore.margeCart()
  }

  const clearUserInfo = () => {
    userinfo.value = {}
  }

  return { userinfo, getUserInfo, clearUserInfo }
}, {
  persist: true
})
