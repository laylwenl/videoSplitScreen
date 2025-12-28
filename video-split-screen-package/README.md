# video-split-screen

Vue 3 视频分屏组件（VideoSplitScreen）——可发布到 npm 的插件包。

安装（npm）

```bash
npm install video-split-screen
# or
yarn add video-split-screen
```

快速使用（全局注册）

```ts
import { createApp } from 'vue'
import App from './App.vue'
import VideoSplitScreen from 'video-split-screen'

const app = createApp(App)
app.use(VideoSplitScreen)
app.mount('#app')
```

按需导入（命名导出）

```ts
import { VideoGridLayout } from 'video-split-screen'
```

样式

包内置一份默认样式，构建时会产出 `dist/style.css`。如果你全局注册插件（`app.use(...)`）示例项目会自动引入样式；也可以按需手动引入：

```ts
import 'video-split-screen/dist/style.css'
```

主要 Props（VideoGridLayout）

- `videos: VideoItem[]` — 视频数组（必填）  
- `layout?: LayoutType` — 布局类型（'1'|'2'|'3'|'4'|'6'|'7'|'8'|'9'|'10'|'13'|'16'），默认 `'1'`  
- `availableLayouts?: LayoutType[]` — 可选显示的布局按钮列表  
- `showToolbar?: boolean` — 是否显示工具栏，默认 `true`  
- `width?: string` — 宽度（任意 CSS 长度，例如 `100%`, `800px`）  
- `height?: string` — 高度（任意 CSS 长度，例如 `70vh`, `600px`）  
- `placeholderText?: string | (index: number) => string` — 全局占位文本或按索引生成文本的函数  
- `placeholders?: Array<string|number>` — 按索引覆盖占位符（可单独修改某些格子）

占位符规则（优先级）

1. `placeholders[index]`（若存在）  
2. `placeholderText`（若为函数则调用函数并传入视觉索引；若为字符串则直接使用）  
3. 回退为视觉索引 + 1（按从左到右、从上到下的视觉顺序编号）
示例与截图

## 示例项目

示例项目包含在本包的 `example` 目录中，展示了组件的所有功能。

### ✨ 重要特性

- 🔧 **直接使用本地包源码** - 无需npm安装，修改包代码后立即生效
- ⚡ **热重载** - 修改组件代码后自动更新示例
- 🎯 **完整功能演示** - 涵盖所有组件特性和使用场景

### 运行示例

```bash
# 方法1：进入示例目录运行
cd example
npm install  # 只需要安装示例依赖
npm run dev

# 方法2：使用便捷脚本
cd example && ./run-example.sh
```

打开浏览器访问 `http://localhost:5173` 查看示例。

### 示例包含的功能

- **基础使用** - 简单的4分屏布局
- **交互控制** - 动态切换布局、自定义尺寸
- **拖拽排序** - 6分屏布局支持拖拽重新排列（无动画效果）
- **自定义占位符** - 函数生成和数组自定义占位符
- **布局展示** - 所有支持的分屏布局预览

示例页面截图（本地运行时预览）。截图文件位于仓库：`docs/example-page.png`。

![示例页面](./docs/example-page.png)

注意：当前打包入口同时包含命名导出与默认导出（插件 `install`）——消费者既可以使用 `app.use(VideoSplitScreen)` 全局注册，也可以按需导入 `VideoGridLayout`。如果你更偏好仅命名导出（避免 `default` 导出的歧义），我可以调整构建配置使输出仅使用命名导出。

示例（demo 控制）

示例项目 `video-split-screen-example/src/App.vue` 包含：
- 控制宽/高的输入框  
- 全局占位文本设置  
- 按钮示例：按索引设置占位符数组（演示单个/批量覆盖）

贡献 & Issues

欢迎在 `repository` 中提交 issue / PR，或把你希望支持的更多布局和行为告诉我。



