<template>
  <div class="app-root">
    <h2>VideoSplitScreen 示例</h2>
    <div class="controls">
      <label>宽度: <input v-model="width" placeholder="100%" /></label>
      <label>高度: <input v-model="height" placeholder="100vh" /></label>
      <label>
        全局占位文本:
        <input v-model="globalPlaceholder" placeholder="默认数字" />
      </label>
      <button @click="applyPlaceholders">按索引设置占位符（示例）</button>
      <button @click="resetPlaceholders">重置占位符</button>
    </div>
    <div class="demo-area">
      <VideoGridLayout
        :videos="videos"
        layout="16"
        :width="width"
        :height="height"
        :placeholder-text="globalPlaceholder || undefined"
        :placeholders="placeholders"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { VideoItem } from 'video-split-screen'

const videos = ref<VideoItem[]>([
  { id: 'cam-1', title: '摄像头 1', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 'cam-2', title: '摄像头 2', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 'cam-3', title: '摄像头 3', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 'cam-4', title: '摄像头 4', url: 'https://www.w3schools.com/html/mov_bbb.mp4' }
])

const width = ref('100%')
const height = ref('70vh')
const globalPlaceholder = ref('')
const placeholders = ref<Array<string | number>>([])

function applyPlaceholders() {
  // 示例：把前 4 个格子设成自定义文本
  placeholders.value = Array(16).fill(undefined)
  placeholders.value[0] = 'A1'
  placeholders.value[1] = 'A2'
  placeholders.value[2] = 'A3'
  placeholders.value[3] = 'A4'
}

function resetPlaceholders() {
  placeholders.value = []
}
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}
.app-root {
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  box-sizing: border-box;
}
.demo-area {
  flex: 1;
  min-height: 0;
}
</style>


