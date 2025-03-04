import { loginAPI } from "@/apis/login";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useUserStore = defineStore('user', () => {
  const userinfo = ref({})
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userinfo.value = res.result
  }

  return { userinfo, getUserInfo }
}, {
  persist: true
})
