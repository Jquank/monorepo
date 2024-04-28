import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export const commonConfig = {
  optimizeDeps: {
    include: ['element-plus/es/components/**/style/css']
  }
}

export const serverConfig = {
  host: '0.0.0.0',
  proxy: {
    // 权限接口
    '/_auth': {
      target: 'http://129.204.48.178:8082/',
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/_auth/, '')
    },
    // 用户接口
    '/_user': {
      target: 'http://129.204.48.178:8202/',
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/_user/, '')
    }
    // '/classification': {
    //   target: 'http://129.204.48.178:8104',
    //   changeOrigin: true
    // }
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
