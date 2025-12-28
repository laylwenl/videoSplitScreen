/**
 * VideoSplitScreen - 视频分屏监控组件
 * 
 * @description
 * 一个功能完整、独立可用的 Vue3 视频分屏组件，专为视频监控系统设计。
 * 已优化性能、容错性、可访问性和用户体验。
 * 
 * @features
 * - 支持 11 种布局模式（1/2/3/4/6/7/8/9/10/13/16 分屏）
 * - 支持拖拽交换视频位置（已优化内存管理）
 * - 完全自适应父元素宽高
 * - 零外部依赖（仅需 Vue 3）
 * - 完整 TypeScript 支持
 * - 可动态控制显示的布局按钮
 * - 完整的 ARIA 支持和键盘导航
 * - 高性能渲染（shallowRef + 缓存优化）
 * 
 * @performance
 * - 使用 shallowRef 优化大数组性能
 * - 布局位置配置自动缓存
 * - CSS transform 实现 GPU 加速动画
 * - 智能边界检查避免不必要的计算
 * 
 * @example
 * ```vue
 * <script setup>
 * import { VideoGridLayout } from '@/VideoSplitScreen'
 * 
 * const videos = ref([
 *   { id: 1, title: '摄像头1', url: 'rtsp://...' },
 *   { id: 2, title: '摄像头2', url: 'rtsp://...' }
 * ])
 * </script>
 * 
 * <template>
 *   <VideoGridLayout :videos="videos" layout="4">
 *     <template #video="{ video, index }">
 *       <YourVideoPlayer :src="video.url" />
 *     </template>
 *   </VideoGridLayout>
 * </template>
 * ```
 * 
 * @dependencies
 * - Vue 3.x
 * 
 * @author Yojack
 * @license MIT
 */

// 导出类型
export * from './types'
export type { VideoItem } from './VideoGridLayout.vue'

// 导出布局配置
export * from './layoutConfig'

// 导出组件
export { default as VideoLayoutIcon } from './VideoLayoutIcon.vue'
export { default as VideoGridLayout } from './VideoGridLayout.vue'

// 默认导出主组件
import type { App } from 'vue'
import VideoGridLayout from './VideoGridLayout.vue'
import VideoLayoutIcon from './VideoLayoutIcon.vue'

const components = {
  VideoGridLayout,
  VideoLayoutIcon
}

export { VideoGridLayout, VideoLayoutIcon }

// Vue plugin installer
export default {
  install(app: App) {
    Object.entries(components).forEach(([name, comp]) => {
      app.component(name, comp as any)
    })
  }
}
