<template>
  <div class="video-player" :style="{ backgroundColor: bgColor }">
    <div class="video-content">
      <div class="video-icon">🎥</div>
      <div class="video-info">
        <h4>{{ video.title || `视频 ${video.id}` }}</h4>
        <p v-if="video.url">{{ video.url }}</p>
        <p v-else class="placeholder">示例视频</p>
      </div>
      <div class="play-button" @click="togglePlay">
        <span v-if="!isPlaying">▶️</span>
        <span v-else>⏸️</span>
      </div>
    </div>

    <!-- 模拟视频播放进度条 -->
    <div v-if="isPlaying" class="progress-bar">
      <div class="progress-fill" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

interface Props {
  video: {
    id: string | number
    title?: string
    url?: string
    [key: string]: any
  }
}

const props = defineProps<Props>()

// 生成随机背景色
const bgColor = `hsl(${Math.random() * 360}, 70%, 85%)`
const isPlaying = ref(false)
const progress = ref(0)
let progressInterval: number | null = null

const togglePlay = () => {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) {
    startProgress()
  } else {
    stopProgress()
  }
}

const startProgress = () => {
  if (progressInterval) return

  progressInterval = window.setInterval(() => {
    progress.value += 1
    if (progress.value >= 100) {
      progress.value = 0
      isPlaying.value = false
      stopProgress()
    }
  }, 100)
}

const stopProgress = () => {
  if (progressInterval) {
    clearInterval(progressInterval)
    progressInterval = null
  }
}

onUnmounted(() => {
  stopProgress()
})
</script>

<style scoped>
.video-player {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.video-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  text-align: center;
}

.video-icon {
  font-size: 2rem;
  margin-bottom: 8px;
  opacity: 0.8;
}

.video-info h4 {
  margin: 0 0 4px 0;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
}

.video-info p {
  margin: 0;
  font-size: 0.8rem;
  color: #666;
}

.placeholder {
  color: #999;
  font-style: italic;
}

.play-button {
  margin-top: 12px;
  font-size: 1.5rem;
  cursor: pointer;
}

.progress-bar {
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
  position: relative;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #42b883, #34d399);
  transition: width 0.1s ease;
  border-radius: 2px;
}
</style>
