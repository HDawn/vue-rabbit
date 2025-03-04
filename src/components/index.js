
import ImageView from "@/components/imageView/index.vue"
import XtxSku from "@/components/XtxSku/index.vue"

export const componentPlugin = {
  install(app) {
    app.component('XtxImageView', ImageView)
    app.component('XtxSku', XtxSku)
  }
}
