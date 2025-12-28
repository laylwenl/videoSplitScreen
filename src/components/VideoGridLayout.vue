<template>
  <div class="video-grid-layout" role="application" aria-label="视频分屏布局" :style="containerStyle">
    <!-- 布局切换工具栏 -->
    <div v-if="showToolbar" class="layout-toolbar" role="toolbar" aria-label="布局切换工具栏">
      <div class="toolbar-title">分屏布局</div>
      <div class="layout-buttons">
        <button
          v-for="layoutType in allLayouts"
          :key="layoutType"
          :class="['layout-btn', { active: currentLayout === layoutType }]"
          @click="changeLayout(layoutType)"
          :title="LAYOUT_CONFIGS[layoutType]?.label || ''"
          :aria-label="`切换到${LAYOUT_CONFIGS[layoutType]?.label || ''}布局`"
          :aria-pressed="currentLayout === layoutType"
          type="button"
        >
          <VideoLayoutIcon :type="layoutType" />
          <span class="layout-label">{{ LAYOUT_CONFIGS[layoutType]?.label || '' }}</span>
        </button>
      </div>
    </div>

    <!-- 视频网格容器 -->
    <div class="video-grid-container" role="region" aria-label="视频网格">
      <div class="video-grid" :style="gridStyle">
        <div
          v-for="(position, index) in layoutPositions"
          :key="displayVideoList[index]?.id ?? index"
          :class="['video-item', { 
            'main-video': isMainVideo(index), 
            'dragging': dragFromIndex === index,
            'drag-over': dragOverIndex === index && dragFromIndex !== index
          }]"
          :style="getVideoItemStyle(index)"
          :draggable="true"
          :aria-label="`视频 ${index + 1}: ${displayVideoList[index]?.title || displayVideoList[index]?.id || ''}`"
          role="article"
          tabindex="0"
          @dragstart="onDragStart($event, index)"
          @dragover.prevent
          @dragenter="onDragEnter($event, index)"
          @dragleave="onDragLeave($event, index)"
          @drop="onDrop($event, index)"
          @dragend="onDragEndNative"
        >
          <slot name="video" :video="displayVideoList[index]" :index="index">
            <!-- 默认占位符：始终显示占位（除非用户提供 slot） -->
            <div class="video-placeholder">
              <!-- 计算该位置在视觉顺序中的索引 -->
              <div class="placeholder-number">{{ getPlaceholderLabel(visualOrder.indexOf(index)) }}</div>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, shallowRef, onBeforeUnmount } from 'vue'
import VideoLayoutIcon from './VideoLayoutIcon.vue'
import { LAYOUT_CONFIGS, getLayoutPositions, getAllLayoutTypes } from '../layoutConfig'
import type { LayoutType } from '../types'

// 常量定义
const DRAG_OPACITY = 0.5
const DRAG_CURSOR = 'grabbing'
const DRAG_IMAGE_OPACITY = '0.8'

export interface VideoItem {
  id: string | number
  title?: string
  url?: string
  [key: string]: any
}

interface Props {
  videos: VideoItem[]
  layout?: LayoutType
  /** 可用的布局列表，不传则显示全部 */
  availableLayouts?: LayoutType[]
  /** 是否显示工具栏，默认 true */
  showToolbar?: boolean
  /** 宽度，可以是 CSS 长度（如 '100%', '800px'） */
  width?: string
  /** 高度，可以是 CSS 长度（如 '100vh', '600px'） */
  height?: string
  /** 全局占位符文本或函数 (index) => string */
  placeholderText?: string | ((index: number) => string)
  /** 按索引覆盖占位符的数组 */
  placeholders?: Array<string | number>
}

const props = withDefaults(defineProps<Props>(), {
  layout: '1',
  showToolbar: true
})

const emit = defineEmits<{
  layoutChange: [layout: LayoutType]
  videosChange: [videos: VideoItem[]]
}>()

// 当前布局
const currentLayout = ref<LayoutType>(props.layout)

// 监听外部传入的 layout 变化
watch(() => props.layout, (newLayout) => {
  currentLayout.value = newLayout
})

// 所有可用布局（根据 prop 过滤）
const allLayouts = computed(() => {
  if (props.availableLayouts && props.availableLayouts.length > 0) {
    return props.availableLayouts
  }
  return getAllLayoutTypes()
})

// 内部槽位（slots）表示每个布局位置上绑定的视频或 undefined
const videoItems = shallowRef<Array<VideoItem | undefined>>([])

// Helper: sync props.videos -> videoItems slots of length maxVideos
function syncVideoSlots(newVideos?: VideoItem[]) {
  const source = Array.isArray(newVideos) ? newVideos : props.videos || []
  const slotsCount = maxVideos.value
  const idToLabel: Record<string | number, number> = {}
  // preserve existing labels
  videoItems.value.forEach((it, idx) => {
    if (it && (it as any).id !== undefined) idToLabel[(it as any).id] = (it as any).__labelNumber ?? (idx + 1)
  })

  const newSlots: Array<VideoItem | undefined> = Array.from({ length: slotsCount }).map((_, i) => {
    const v = source[i]
    if (v) {
      const label = idToLabel[(v as any).id] ?? (v as any).__labelNumber ?? (i + 1)
      return { ...(v as any), __labelNumber: label } as VideoItem
    }
    return undefined
  })
  videoItems.value = newSlots
}

// 注意：不要在函数定义位置立即同步 slots，因为后续有依赖项（如 maxVideos）在 setup 中晚些声明。
// 初始同步将在依赖声明完成后调用。

// 监听外部传入的视频变化（使用浅比较，避免深度监听导致的循环）
watch(() => props.videos, (newVideos) => {
  if (!Array.isArray(newVideos)) {
    console.warn('[VideoGridLayout] Invalid videos prop, expected array')
    return
  }
  syncVideoSlots(newVideos)
}, { flush: 'post' })

// 监听视频列表变化，通知父组件（只在拖拽时触发，避免循环）
let isInternalUpdate = false
watch(videoItems, (newVideos) => {
  if (!isInternalUpdate && Array.isArray(newVideos)) {
    emit('videosChange', newVideos)
  }
})

// 当前布局配置 - 添加容错处理
const layoutConfig = computed(() => {
  const config = LAYOUT_CONFIGS[currentLayout.value]
  if (!config) {
    console.warn(`[VideoGridLayout] Invalid layout type: ${currentLayout.value}, fallback to '4'`)
    return LAYOUT_CONFIGS['4']
  }
  return config
})

// 当前布局的视频位置
const layoutPositions = computed(() => getLayoutPositions(currentLayout.value))

// 当前布局需要显示的视频数量
const maxVideos = computed(() => layoutConfig.value?.count || 4)

// 实际显示的视频列表（根据布局限制数量）
const displayVideoList = computed(() => {
  return videoItems.value.slice(0, maxVideos.value).map(v => v as VideoItem).filter(Boolean) as VideoItem[]
})

// 初始化 slots（在 maxVideos 等依赖被定义之后调用）
syncVideoSlots(props.videos)

// 当布局变化（maxVideos）时也需要重新同步 slots 长度
watch(maxVideos, () => {
  syncVideoSlots(props.videos)
})

// 视觉顺序映射：按 row then col 排序，得到视觉索引 -> 布局位置索引
const visualOrder = computed(() => {
  const withIndex = layoutPositions.value.map((p, idx) => ({ p, idx }))
  withIndex.sort((a, b) => {
    if (a.p.row === b.p.row) {
      return (a.p.col || 0) - (b.p.col || 0)
    }
    return (a.p.row || 0) - (b.p.row || 0)
  })
  return withIndex.map(w => w.idx)
})

// 拖拽状态
const dragFromIndex = ref<number>(-1)
const dragOverIndex = ref<number>(-1)
const dragImageElement = shallowRef<HTMLElement | null>(null)
// 自定义拖拽预览元素（用于按目标大小缩放）
const customPreviewEl = shallowRef<HTMLElement | null>(null)
let mouseMoveHandler: ((e: MouseEvent) => void) | null = null
let dragMoveHandler: ((e: DragEvent) => void) | null = null


// 网格样式
const gridStyle = computed(() => {
  const config = layoutConfig.value
  return {
    display: 'grid',
    gridTemplateColumns: config?.colTemplate || `repeat(${config?.cols || 2}, 1fr)`,
    gridTemplateRows: config?.rowTemplate || `repeat(${config?.rows || 2}, 1fr)`,
    gap: '4px',
    width: (props.width as string) || '100%',
    height: (props.height as string) || '100%'
  }
})

// 容器样式（外层可用于设置外部宽高）
const containerStyle = computed(() => {
  return {
    width: (props.width as string) || '100%',
    height: (props.height as string) || '100%'
  }
})

function getPlaceholderLabel(index: number) {
  // 如果有视频，默认 slot 会渲染视频内容（slot 优先）
  // index here is视觉索引 (0-based). 映射到实际位置索引：
  const visualIndex = index
  const posIndex = visualOrder.value[visualIndex]
  if (Array.isArray(props.placeholders) && props.placeholders[posIndex] !== undefined) {
    return String(props.placeholders[posIndex])
  }

  if (typeof props.placeholderText === 'function') {
    try {
      return props.placeholderText(visualIndex)
    } catch (e) {
      return String(visualIndex + 1)
    }
  }

  if (props.placeholderText) {
    return String(props.placeholderText)
  }

  return String(visualIndex + 1)
}

// 获取视频项样式 - 添加边界检查
function getVideoItemStyle(index: number) {
  const position = layoutPositions.value[index]
  if (!position || typeof position.col !== 'number' || typeof position.row !== 'number') {
    return {}
  }

  return {
    gridColumn: `${position.col} / span ${position.colSpan}`,
    gridRow: `${position.row} / span ${position.rowSpan}`
  }
}

// 判断是否是主视频
function isMainVideo(index: number) {
  const position = layoutPositions.value[index]
  return position?.isMain || false
}

// 切换布局
function changeLayout(layout: string) {
  currentLayout.value = layout as LayoutType
  emit('layoutChange', currentLayout.value)
}

// 清理拖拽预览图像
function cleanupDragImage() {
  if (dragImageElement.value && document.body.contains(dragImageElement.value)) {
    try {
      document.body.removeChild(dragImageElement.value)
    } catch (error) {
      console.warn('[VideoGridLayout] Failed to cleanup drag image:', error)
    }
    dragImageElement.value = null
  }
  if (customPreviewEl.value && document.body.contains(customPreviewEl.value)) {
    try {
      document.body.removeChild(customPreviewEl.value)
    } catch (error) {
      // ignore
    }
    customPreviewEl.value = null
  }
  if (mouseMoveHandler) {
    document.removeEventListener('mousemove', mouseMoveHandler)
    mouseMoveHandler = null
  }
  if (dragMoveHandler) {
    document.removeEventListener('drag', dragMoveHandler)
    dragMoveHandler = null
  }
}

// 原生拖拽实现（实现交换逻辑）
function onDragStart(evt: DragEvent, index: number) {
  // 边界检查
  if (index < 0 || index >= videoItems.value.length) {
    console.warn('[VideoGridLayout] Invalid drag index:', index)
    return
  }
  
  dragFromIndex.value = index
  
  if (!evt.dataTransfer) return
  evt.dataTransfer.effectAllowed = 'move'
  
  const target = evt.target as HTMLElement
  const videoItem = target.closest('.video-item') as HTMLElement
  
  if (videoItem) {
    try {
      // 清理之前可能残留的拖拽图像或自定义预览
      cleanupDragImage()

      // 完全禁用原生拖拽预览和行为
      if (evt.dataTransfer) {
        evt.dataTransfer.effectAllowed = 'move'
        // 使用空的Image完全禁用原生拖拽预览
        const img = new Image()
        img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
        evt.dataTransfer.setDragImage(img, 0, 0)
      }

      // 创建自定义预览元素（克隆）
      const preview = videoItem.cloneNode(true) as HTMLElement

      // 清理预览元素，移除可能导致问题的动态内容
      const progressBars = preview.querySelectorAll('.progress-bar, .play-button')
      progressBars.forEach(bar => bar.remove())

      // 确保所有可能有动画的元素都被清理
      const animatedElements = preview.querySelectorAll('[style*="transition"], [style*="animation"], .video-icon')
      animatedElements.forEach(el => {
        try {
          (el as HTMLElement).style.transition = 'none'
          ;(el as HTMLElement).style.animation = 'none'
        } catch (err) {
          // ignore
        }
      })

      preview.style.position = 'fixed'
      preview.style.margin = '0'
      preview.style.pointerEvents = 'none'
      preview.style.opacity = DRAG_IMAGE_OPACITY
      preview.style.zIndex = '9999'

      // 先挂载以便读取尺寸，再用鼠标居中计算位置（避免使用 transform 导致的 0,0 闪现）
      document.body.appendChild(preview)
      customPreviewEl.value = preview

      try {
        const srcRect = videoItem.getBoundingClientRect()
        preview.style.width = `${srcRect.width}px`
        preview.style.height = `${srcRect.height}px`
      } catch (e) {
        // ignore
      }

      // 带随鼠标移动的 handler：用尺寸计算中心对齐
      mouseMoveHandler = (e: MouseEvent) => {
        if (!customPreviewEl.value) return
        const pw = customPreviewEl.value.offsetWidth || 0
        const ph = customPreviewEl.value.offsetHeight || 0
        const left = Math.max(0, e.clientX - pw / 2)
        const top = Math.max(0, e.clientY - ph / 2)
        customPreviewEl.value.style.left = `${left}px`
        customPreviewEl.value.style.top = `${top}px`
      }
      document.addEventListener('mousemove', mouseMoveHandler)
      // 有些浏览器在原生 drag 操作期间不会派发 mousemove，可同时监听 drag 事件以保证预览跟随
      dragMoveHandler = (e: DragEvent) => {
        if (!customPreviewEl.value) return
        const pw = customPreviewEl.value.offsetWidth || 0
        const ph = customPreviewEl.value.offsetHeight || 0
        const left = Math.max(0, (e.clientX || 0) - pw / 2)
        const top = Math.max(0, (e.clientY || 0) - ph / 2)
        customPreviewEl.value.style.left = `${left}px`
        customPreviewEl.value.style.top = `${top}px`
      }
      document.addEventListener('drag', dragMoveHandler)

      // 添加拖拽开始的视觉反馈到原元素
      videoItem.style.opacity = String(DRAG_OPACITY)
      videoItem.style.cursor = DRAG_CURSOR
      videoItem.style.borderColor = '#ff6b6b' // 红色边框表示正在拖拽
    } catch (error) {
      console.error('[VideoGridLayout] Drag start error:', error)
      cleanupDragImage()
    }
  }
}

function onDrop(evt: DragEvent, toIndex: number) {
  evt.preventDefault()
  evt.stopPropagation()

  const fromIndex = dragFromIndex.value

  // 边界检查
  if (fromIndex === -1 || fromIndex === toIndex) {
    dragFromIndex.value = -1
    return
  }

  if (toIndex < 0 || toIndex >= layoutPositions.value.length) {
    console.warn('[VideoGridLayout] Invalid drop index:', toIndex)
    dragFromIndex.value = -1
    return
  }

  try {
    // 给目标位置添加视觉反馈
    const targetElement = evt.currentTarget as HTMLElement
    if (targetElement) {
      targetElement.style.backgroundColor = 'rgba(66, 184, 131, 0.3)'
      targetElement.style.borderColor = '#42b883'
      // 短暂延迟后恢复
      setTimeout(() => {
        targetElement.style.backgroundColor = ''
        targetElement.style.borderColor = ''
      }, 200)
    }

    // 交换两个位置上的视频（允许目标位置为空）
    const temp = [...videoItems.value]
    const videoA = temp[fromIndex]
    const videoB = temp[toIndex]
    temp[fromIndex] = videoB
    temp[toIndex] = videoA
    // 标记为内部更新，避免触发外部 watch 回流
    isInternalUpdate = true
    videoItems.value = temp

    // 延迟重置标志并通知父组件当前视频顺序（以实际存在的视频数组为准）
    setTimeout(() => {
      isInternalUpdate = false
      emit('videosChange', videoItems.value.filter(Boolean) as VideoItem[])
    }, 0)
  } catch (error) {
    console.error('[VideoGridLayout] Drop error:', error)
  } finally {
    // 重置拖拽状态
    dragFromIndex.value = -1
  }
}

function onDragEnter(evt: DragEvent, index: number) {
  evt.preventDefault()
  if (dragFromIndex.value !== -1 && dragFromIndex.value !== index) {
    dragOverIndex.value = index
    // 不再调整预览大小，保持原始大小跟随鼠标
  }
}

function onDragLeave(evt: DragEvent, index: number) {
  evt.preventDefault()
  // 只有当真正离开该元素时才清除（不是进入子元素）
  const target = evt.target as HTMLElement
  const relatedTarget = evt.relatedTarget as HTMLElement
  
  if (!target.contains(relatedTarget)) {
    if (dragOverIndex.value === index) {
      dragOverIndex.value = -1
    }
  }
}

function onDragEndNative(evt: DragEvent) {
  const target = evt.target as HTMLElement
  const videoItem = target.closest('.video-item') as HTMLElement
  
  if (videoItem) {
    // 恢复透明度、光标和边框
    videoItem.style.opacity = '1'
    videoItem.style.cursor = 'move'
    videoItem.style.borderColor = ''
  }
  
  // 清理拖拽图像 / 自定义预览
  cleanupDragImage()
  
  dragFromIndex.value = -1
  dragOverIndex.value = -1
}

// 组件卸载时清理
onBeforeUnmount(() => {
  cleanupDragImage()
})
</script>

<style scoped>
.video-grid-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(0, 21, 41, 0.3);
}

.layout-toolbar {
  padding: 12px 16px;
  background: white;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.toolbar-title {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.layout-buttons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.layout-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 1px solid #d0d0d0;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 12px;
  color: #666;
}

.layout-btn:hover {
  border-color: #42b883;
  color: #42b883;
  background: #f0fdf4;
}

.layout-btn.active {
  border-color: #42b883;
  background: #42b883;
  color: white;
}

.layout-label {
  font-size: 12px;
}

.video-grid-container {
  flex: 1;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
  overflow: hidden;
  box-sizing: border-box;
}

.video-grid {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  background: rgba(0, 64, 159, 0.2);
  padding: 4px;
  border-radius: 4px;
  box-sizing: border-box;
}

.video-item {
  position: relative;
  background: rgba(0, 21, 41, 0.6);
  border: 2px solid rgba(0, 64, 159, 0.49);
  border-radius: 4px;
  overflow: hidden;
  cursor: move;
  min-height: 0;
  min-width: 0;
  user-select: none;
  -webkit-user-drag: element;
}

.video-item.dragging {
  opacity: 0.5;
  cursor: grabbing;
}

.video-item:hover {
  border-color: rgba(66, 184, 131, 0.8);
  background: rgba(0, 21, 41, 0.8);
}

.video-item.drag-over {
  border: 1px solid rgba(66, 184, 131, 1) !important;
  background: rgba(66, 184, 131, 0.2) !important;
}

.video-item:focus {
  outline: 1px solid rgba(66, 184, 131, 1);
  outline-offset: 1px;
}

.video-item.main-video {
  border-width: 1px;
}

.video-item :deep(> *) {
  width: 100%;
  height: 100%;
}

.video-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: rgba(61, 230, 255, 0.5);
  user-select: none;
  background: rgba(0, 64, 159, 0.3);
}

.placeholder-number {
  font-size: 48px;
  font-weight: bold;
  color: rgba(61, 230, 255, 0.6);
  text-shadow: 0 0 10px rgba(61, 230, 255, 0.3);
}

/* 响应式 */
@media (max-width: 768px) {
  .layout-toolbar {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .layout-label {
    display: none;
  }
}
</style>


