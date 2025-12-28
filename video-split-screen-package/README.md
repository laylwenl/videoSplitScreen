# video-split-screen

Vue 3 视频分屏组件（VideoSplitScreen）——可发布到 npm 的插件包。

当前包版本: `1.0.1`

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

如何发布到 npm（示例）

1. 在 `video-split-screen-package` 目录确认 `package.json` 已填写 `name`, `version`, `repository` 等字段。  
2. 构建并生成类型声明：

```bash
cd video-split-screen-package
npm install
npm run build
npm run build:types
```

3. 登录 / 设置 token（在你的本地环境或 CI）：

```bash
# 如果需要在本地用 token 发布（替换 YOUR_TOKEN）
npm config set //registry.npmjs.org/:_authToken=YOUR_TOKEN
```

4. 发布：

```bash
npm publish --access public
```

在示例中测试（示例仓库已包含 `video-split-screen-example`）

方法 A（本地 file: 引用，已在示例中设置好，方便本地开发）：

```bash
cd video-split-screen-example
npm install
npm run dev
```

方法 B（发布到 npm 后，切换示例依赖并安装）：

1. 在 `video-split-screen-example/package.json` 把依赖从 `file:../video-split-screen-package` 改为：

```json
"video-split-screen": "^1.0.1"
```

2. 然后：

```bash
cd video-split-screen-example
npm install
npm run dev
```

注意：当前打包入口同时包含命名导出与默认导出（插件 `install`）——消费者既可以使用 `app.use(VideoSplitScreen)` 全局注册，也可以按需导入 `VideoGridLayout`。如果你更偏好仅命名导出（避免 `default` 导出的歧义），我可以调整构建配置使输出仅使用命名导出。

示例（demo 控制）

示例项目 `video-split-screen-example/src/App.vue` 包含：
- 控制宽/高的输入框  
- 全局占位文本设置  
- 按钮示例：按索引设置占位符数组（演示单个/批量覆盖）

贡献 & Issues

欢迎在 `repository` 中提交 issue / PR，或把你希望支持的更多布局和行为告诉我。



