import { createApp } from 'vue'
import App from './App.vue'
// 使用本地包（示例以 file: 引用本地 package）
import VideoSplitScreen from 'video-split-screen'

const app = createApp(App)
app.use(VideoSplitScreen)
app.mount('#app')

// Ensure package default styles are loaded (built CSS)
import 'video-split-screen/dist/style.css'


