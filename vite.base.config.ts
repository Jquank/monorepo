import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export const commonConfig = {
  optimizeDeps: {
    include: ['element-plus/es/components/**/style/css']
  }
}
export const elementPlugin = [
  AutoImport({
    resolvers: [ElementPlusResolver()]
  }),
  Components({
    resolvers: [ElementPlusResolver()]
  })
]
