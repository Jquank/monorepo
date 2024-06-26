import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { commonConfig, serverConfig, elementPlugin } from '../../vite.base.config'
// https://vitejs.dev/config/
export default defineConfig({
  ...commonConfig,
  plugins: [vue(), ...elementPlugin],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8520,
    ...serverConfig
  }
})
