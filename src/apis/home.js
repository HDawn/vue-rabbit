import httpInstance from "@/utils/http"

export function getBannerApi() {
  return httpInstance({
    url: 'home/banner'
  })
}

export function findNewAPI() {
  return httpInstance({
    url: "home/new"
  })
}
