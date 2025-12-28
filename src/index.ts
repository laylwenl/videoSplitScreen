// 导出类型
export * from './types'

// 导出默认样式
import './styles/default.css'

// 导出布局配置
export * from './layoutConfig'

// 导出组件
export { default as VideoGridLayout } from './components/VideoGridLayout.vue'
export { default as VideoLayoutIcon } from './components/VideoLayoutIcon.vue'

import type { App } from 'vue'
import VideoGridLayout from './components/VideoGridLayout.vue'
import VideoLayoutIcon from './components/VideoLayoutIcon.vue'

const components = {
  VideoGridLayout,
  VideoLayoutIcon
}

// Vue plugin installer
export default {
  install(app: App) {
    Object.entries(components).forEach(([name, comp]) => {
      app.component(name, comp as any)
    })
  }
}


