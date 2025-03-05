import router from '@/router'
import { useUserStore } from '@/stores/userStore'
import axios from 'axios'
import { ElMessage } from 'element-plus'

// 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  const userStore = useUserStore()
  const token = userStore.userinfo.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  //统一错误提示
  ElMessage({
    type: 'warning',
    message: e.response.data.message
  })

  //401token失效处理
  if (e.response.status === 401) {
    const userStore = useUserStore()
    userStore.clearUserInfo()
    router.push("/login")
    ElMessage({ type: "warning", message: "请重新登录" })
  }
  return Promise.reject(e)
})


export default httpInstance
