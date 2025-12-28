<template>
  <div class="app-container">
    <header class="header">
      <h1>🎬 VideoSplitScreen 示例</h1>
      <p>Vue 3 视频分屏组件演示（直接使用本地包）</p>
    </header>

    <!-- 基础示例 -->
    <section class="demo-section">
      <h2 class="section-title">基础使用</h2>

      <div class="info-box">
        <h4>📋 基本用法</h4>
        <p>最简单的使用方式：传入视频数组和布局类型</p>
        <div class="code-block">
import { VideoGridLayout } from 'video-split-screen'

&lt;VideoGridLayout :videos="videos" layout="4" /&gt;
        </div>
      </div>

      <div class="demo-item">
        <h3>4分屏布局</h3>
        <div class="video-layout-container" style="height: 400px;">
          <VideoGridLayout
            :videos="sampleVideos"
            layout="4"
            :available-layouts="allowedLayouts"
            height="100%"
          >
            <template #video="{ video }">
              <VideoPlayer :video="video" />
            </template>
          </VideoGridLayout>
        </div>
      </div>
    </section>

    <!-- 交互控制示例 -->
    <section class="demo-section">
      <h2 class="section-title">交互控制</h2>

      <div class="controls">
        <div class="control-group">
          <label for="layout-select">布局类型:</label>
          <select id="layout-select" v-model="currentLayout">
            <option value="1">1分屏</option>
            <option value="2">2分屏</option>
            <option value="3">3分屏</option>
            <option value="4">4分屏</option>
            <option value="6">6分屏</option>
            <option value="8">8分屏</option>
            <option value="9">9分屏</option>
            <option value="16">16分屏</option>
          </select>
        </div>

        <div class="control-group">
          <label for="width-input">宽度:</label>
          <input id="width-input" v-model="layoutWidth" placeholder="800px" />
        </div>

        <div class="control-group">
          <label for="height-input">高度:</label>
          <input id="height-input" v-model="layoutHeight" placeholder="400px" />
        </div>

        <div class="control-group">
          <label for="placeholder-input">占位符文本:</label>
          <input id="placeholder-input" v-model="placeholderText" placeholder="拖拽排序视频" />
        </div>
      </div>

      <div class="info-box">
        <h4>🔧 Props 说明</h4>
        <p><strong>videos:</strong> 视频数组，必填</p>
        <p><strong>layout:</strong> 布局类型 ('1'|'2'|'3'|'4'|'6'|'7'|'8'|'9'|'10'|'13'|'16')</p>
        <p><strong>width/height:</strong> 容器尺寸，支持CSS长度单位</p>
        <p><strong>showToolbar:</strong> 是否显示工具栏，默认 true</p>
        <p><strong>placeholderText:</strong> 占位符文本</p>
      </div>

      <div class="demo-item">
        <h3>可控制的分屏布局</h3>
        <div class="video-layout-container" :style="{ height: layoutHeight || '400px' }">
          <VideoGridLayout
            :videos="sampleVideos"
            :layout="currentLayout"
            :available-layouts="allowedLayouts"
            :width="layoutWidth"
            :height="layoutHeight"
            :placeholder-text="placeholderText"
            @layout-change="onLayoutChange"
            @videos-change="onVideosChange"
          >
            <template #video="{ video }">
              <VideoPlayer :video="video" />
            </template>
          </VideoGridLayout>
        </div>
      </div>
    </section>

    <!-- 拖拽排序示例 -->
    <section class="demo-section">
      <h2 class="section-title">拖拽排序</h2>

      <div class="info-box">
        <h4>🖱️ 拖拽功能</h4>
        <p>支持拖拽重新排列视频位置，实时更新videos数组</p>
        <p>拖拽时显示透明度变化，无动画效果</p>
        <div class="code-block">
&lt;VideoGridLayout
  :videos="videos"
  layout="6"
  @videos-change="handleVideosChange"
/&gt;
        </div>
      </div>

      <div class="demo-item">
        <h3>6分屏 + 拖拽排序</h3>
        <div class="video-layout-container" style="height: 500px;">
          <VideoGridLayout
            :videos="draggableVideos"
            layout="6"
            @videos-change="onDraggableVideosChange"
          >
            <template #video="{ video }">
              <VideoPlayer :video="video" />
            </template>
          </VideoGridLayout>
        </div>
      </div>
    </section>

    <!-- 自定义占位符示例 -->
    <section class="demo-section">
      <h2 class="section-title">自定义占位符</h2>

      <div class="info-box">
        <h4>📝 占位符配置</h4>
        <p><strong>placeholderText:</strong> 全局占位符文本或函数</p>
        <p><strong>placeholders:</strong> 按索引自定义占位符数组</p>
        <div class="code-block">
// 全局占位符
:placeholder-text="'摄像头 ' + (index + 1)"

// 自定义数组
:placeholders="['主摄像头', '侧面', '后方', '红外']"
        </div>
      </div>

      <div class="demo-grid">
        <div class="demo-item">
          <h3>函数生成占位符</h3>
          <div class="video-layout-container" style="height: 300px;">
            <VideoGridLayout
              :videos="sampleVideos.slice(0, 4)"
              layout="4"
              :placeholder-text="getCameraPlaceholder"
              height="100%"
            />
          </div>
        </div>

        <div class="demo-item">
          <h3>自定义占位符数组</h3>
          <div class="video-layout-container" style="height: 300px;">
            <VideoGridLayout
              :videos="sampleVideos.slice(0, 4)"
              layout="4"
              :placeholders="customPlaceholders"
              height="100%"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 不同布局展示 -->
    <section class="demo-section">
      <h2 class="section-title">支持的布局类型</h2>

      <div class="demo-grid">
        <div v-for="layout in ['1', '4', '9', '16']" :key="layout" class="demo-item">
          <h3>{{ layout }}分屏布局</h3>
          <div class="video-layout-container" style="height: 250px;">
            <VideoGridLayout
              :videos="sampleVideos.slice(0, parseInt(layout))"
              :layout="layout as LayoutType"
              :show-toolbar="false"
              height="100%"
            >
              <template #video="{ video }">
                <VideoPlayer :video="video" />
              </template>
            </VideoGridLayout>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VideoGridLayout from '../../src/components/VideoGridLayout.vue'
import type { LayoutType } from '../../src/types'
import VideoPlayer from './components/VideoPlayer.vue'

// 示例视频数据
const sampleVideos = ref([
  { id: 1, title: '监控摄像头 1', url: 'rtmp://example.com/camera1' },
  { id: 2, title: '监控摄像头 2', url: 'rtmp://example.com/camera2' },
  { id: 3, title: '监控摄像头 3', url: 'rtmp://example.com/camera3' },
  { id: 4, title: '监控摄像头 4', url: 'rtmp://example.com/camera4' },
  { id: 5, title: '监控摄像头 5', url: 'rtmp://example.com/camera5' },
  { id: 6, title: '监控摄像头 6', url: 'rtmp://example.com/camera6' },
  { id: 7, title: '监控摄像头 7', url: 'rtmp://example.com/camera7' },
  { id: 8, title: '监控摄像头 8', url: 'rtmp://example.com/camera8' },
  { id: 9, title: '监控摄像头 9', url: 'rtmp://example.com/camera9' },
  { id: 10, title: '监控摄像头 10', url: 'rtmp://example.com/camera10' },
  { id: 11, title: '监控摄像头 11', url: 'rtmp://example.com/camera11' },
  { id: 12, title: '监控摄像头 12', url: 'rtmp://example.com/camera12' },
  { id: 13, title: '监控摄像头 13', url: 'rtmp://example.com/camera13' },
  { id: 14, title: '监控摄像头 14', url: 'rtmp://example.com/camera14' },
  { id: 15, title: '监控摄像头 15', url: 'rtmp://example.com/camera15' },
  { id: 16, title: '监控摄像头 16', url: 'rtmp://example.com/camera16' }
])

// 拖拽示例的视频数据
const draggableVideos = ref([
  { id: 'A', title: '摄像头 A' },
  { id: 'B', title: '摄像头 B' },
  { id: 'C', title: '摄像头 C' },
  { id: 'D', title: '摄像头 D' },
  { id: 'E', title: '摄像头 E' },
  { id: 'F', title: '摄像头 F' }
])

// 控制变量
const currentLayout = ref<LayoutType>('4')
const layoutWidth = ref('100%')
const layoutHeight = ref('400px')
const placeholderText = ref('拖拽排序视频')

// 在示例页配置可用的布局按钮（只显示 1/4/9/16）
const allowedLayouts = ['1', '4', '9', '16'] as LayoutType[]
// 自定义占位符数组
const customPlaceholders = ref(['主摄像头', '侧面监控', '后方视角', '红外夜视'])

// 事件处理
const onLayoutChange = (layout: LayoutType) => {
  console.log('Layout changed to:', layout)
}

const onVideosChange = (videos: any[]) => {
  console.log('Videos changed:', videos)
}

const onDraggableVideosChange = (videos: any[]) => {
  draggableVideos.value = videos
  console.log('Draggable videos updated:', videos)
}

// 自定义占位符函数
const getCameraPlaceholder = (index: number) => {
  return `摄像头 ${index + 1}`
}

</script>

<style scoped>

/* App.vue 特有的样式已移至 index.html 中的全局样式 */
</style>
