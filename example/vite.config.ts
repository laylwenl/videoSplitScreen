import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    host: true
  },
  resolve: {
    alias: {
      // 直接引用本地包源码，无需npm安装
      'video-split-screen': resolve(__dirname, '..', 'src')
    }
  }
})
