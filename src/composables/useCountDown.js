import dayjs from "dayjs"
import { computed, onUnmounted, ref } from "vue"

export const useCountDown = () => {
  const time = ref(0)
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))

  let timer = null;
  const start = (currentTime) => {
    if (currentTime > 0) {
      time.value = currentTime
      timer = setInterval(() => {
        if (time.value > 0) {
          time.value--;
        }
      }, 1000)
    }
  }

  onUnmounted(() => {
    timer && clearInterval(timer)
  })

  return {
    formatTime, start
  }
}
