import { createApp } from 'vue'
import App from './App.vue'

// 直接导入本地包组件
import VideoSplitScreen from 'video-split-screen'

const app = createApp(App)

// 使用插件（全局注册组件）
app.use(VideoSplitScreen)

app.mount('#app')
