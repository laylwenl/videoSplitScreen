<template>
  <div class="video-grid-layout" role="application" aria-label="视频分屏布局">
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
          v-for="(video, index) in displayVideoList"
          :key="video.id"
          :class="['video-item', { 
            'main-video': isMainVideo(index), 
            'dragging': dragFromIndex === index,
            'drag-over': dragOverIndex === index && dragFromIndex !== index
          }]"
          :style="getVideoItemStyle(index)"
          :draggable="true"
          :aria-label="`视频 ${index + 1}: ${video.title || video.id}`"
          role="article"
          tabindex="0"
          @dragstart="onDragStart($event, index)"
          @dragover.prevent
          @dragenter="onDragEnter($event, index)"
          @dragleave="onDragLeave($event, index)"
          @drop="onDrop($event, index)"
          @dragend="onDragEndNative"
        >
          <slot name="video" :video="video" :index="index">
            <!-- 默认占位符 -->
            <div class="video-placeholder">
              <div class="placeholder-number">{{ index + 1 }}</div>
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
import { LAYOUT_CONFIGS, getLayoutPositions, getAllLayoutTypes } from './layoutConfig'
import type { LayoutType } from './types'

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

// 视频列表（可拖拽）- 使用 shallowRef 优化性能
const videoItems = shallowRef<VideoItem[]>([...props.videos])

// 监听外部传入的视频变化（使用浅比较，避免深度监听导致的循环）
watch(() => props.videos, (newVideos) => {
  // 边界检查：确保 newVideos 是有效数组
  if (!Array.isArray(newVideos)) {
    console.warn('[VideoGridLayout] Invalid videos prop, expected array')
    return
  }
  
  // 比较数组长度和每个元素的 id，避免不必要的更新
  if (videoItems.value.length !== newVideos.length ||
      videoItems.value.some((item, index) => item.id !== newVideos[index]?.id)) {
    videoItems.value = [...newVideos]
  }
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
const displayVideoList = computed(() => videoItems.value.slice(0, maxVideos.value))

// 拖拽状态
const dragFromIndex = ref<number>(-1)
const dragOverIndex = ref<number>(-1)
const dragImageElement = shallowRef<HTMLElement | null>(null)


// 网格样式
const gridStyle = computed(() => {
  const config = layoutConfig.value
  return {
    display: 'grid',
    gridTemplateColumns: config?.colTemplate || `repeat(${config?.cols || 2}, 1fr)`,
    gridTemplateRows: config?.rowTemplate || `repeat(${config?.rows || 2}, 1fr)`,
    gap: '4px',
    width: '100%',
    height: '100%'
  }
})

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
      // 清理之前可能残留的拖拽图像
      cleanupDragImage()
      
      // 创建拖拽预览图像
      const dragImage = videoItem.cloneNode(true) as HTMLElement
      dragImage.style.width = `${videoItem.offsetWidth}px`
      dragImage.style.height = `${videoItem.offsetHeight}px`
      dragImage.style.opacity = DRAG_IMAGE_OPACITY
      dragImage.style.position = 'absolute'
      dragImage.style.top = '-9999px'
      dragImage.style.pointerEvents = 'none'
      document.body.appendChild(dragImage)
      dragImageElement.value = dragImage
      
      // 设置拖拽预览图像
      evt.dataTransfer.setDragImage(dragImage, videoItem.offsetWidth / 2, videoItem.offsetHeight / 2)
      
      // 延迟移除预览图像
      setTimeout(() => {
        cleanupDragImage()
      }, 100)
      
      // 添加半透明效果
      videoItem.style.opacity = String(DRAG_OPACITY)
      videoItem.style.cursor = DRAG_CURSOR
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
  
  if (toIndex < 0 || toIndex >= videoItems.value.length) {
    console.warn('[VideoGridLayout] Invalid drop index:', toIndex)
    dragFromIndex.value = -1
    return
  }
  
  try {
    // 交换两个视频的位置
    const videoA = videoItems.value[fromIndex]
    const videoB = videoItems.value[toIndex]
    
    if (videoA && videoB) {
      // 标记为内部更新，避免触发 watch
      isInternalUpdate = true
      const temp = [...videoItems.value]
      temp[fromIndex] = videoB
      temp[toIndex] = videoA
      videoItems.value = temp
      
      // 延迟重置标志，确保 watch 能正常触发
      setTimeout(() => {
        isInternalUpdate = false
        emit('videosChange', videoItems.value)
      }, 0)
    }
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
    // 恢复透明度和光标
    videoItem.style.opacity = '1'
    videoItem.style.cursor = 'move'
  }
  
  // 清理拖拽图像
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
  transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  min-height: 0;
  min-width: 0;
  user-select: none;
  -webkit-user-drag: element;
  will-change: transform;
}

.video-item.dragging {
  opacity: 0.5;
  cursor: grabbing;
  transform: scale(0.98);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
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

