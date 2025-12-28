import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'VideoSplitScreen',
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      // 外部化依赖，避免打包 Vue
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})


