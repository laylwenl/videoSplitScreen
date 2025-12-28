# VideoSplitScreen 示例项目

这个示例项目演示了如何使用 Vue 3 视频分屏组件的所有功能。

## 特性

- ✅ **直接使用本地包源码** - 无需npm安装，修改包代码后立即生效
- 🎬 完整的组件功能演示
- 🖱️ 拖拽排序功能展示
- 🎨 多种布局类型预览
- 📱 响应式设计

## 快速开始

```bash
# 进入示例目录
cd example

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 浏览器访问 http://localhost:5173
```

## 示例包含的功能

### 🎯 基础使用
- 简单的4分屏布局展示
- 基本的组件使用方式

### 🎛️ 交互控制
- 动态切换布局类型 (1/2/3/4/6/8/9/16分屏)
- 自定义宽度和高度
- 占位符文本设置

### 🖱️ 拖拽排序
- 6分屏布局支持拖拽重新排列
- 实时更新视频数组
- 无动画效果的纯拖拽功能

### 📝 自定义占位符
- 函数生成占位符文本
- 自定义占位符数组
- 按索引覆盖占位符

### 🎨 布局展示
- 所有支持的分屏布局预览
- 不同分屏数量的视觉效果

## 组件API

```vue
<template>
  <VideoGridLayout
    :videos="videos"
    :layout="'4'"
    :width="'800px'"
    :height="'400px'"
    :show-toolbar="true"
    :placeholder-text="'拖拽排序'"
    :placeholders="['摄像头1', '摄像头2']"
    @layout-change="handleLayoutChange"
    @videos-change="handleVideosChange"
  >
    <template #video="{ video, index }">
      <!-- 自定义视频内容 -->
      <YourVideoPlayer :video="video" />
    </template>
  </VideoGridLayout>
</template>
```

## 支持的布局类型

- `'1'` - 1分屏
- `'2'` - 2分屏
- `'3'` - 3分屏 (主视频 + 2个小视频)
- `'4'` - 4分屏
- `'6'` - 6分屏
- `'7'` - 7分屏
- `'8'` - 8分屏 (主视频 + 7个小视频)
- `'9'` - 9分屏
- `'10'` - 10分屏 (主视频 + 9个小视频)
- `'13'` - 13分屏
- `'16'` - 16分屏

## 事件说明

- `@layout-change` - 布局切换时触发
- `@videos-change` - 视频数组变化时触发（拖拽排序后）

## Props 说明

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `videos` | `VideoItem[]` | - | 视频数组（必填） |
| `layout` | `LayoutType` | `'1'` | 布局类型 |
| `availableLayouts` | `LayoutType[]` | - | 可用的布局选项 |
| `showToolbar` | `boolean` | `true` | 是否显示工具栏 |
| `width` | `string` | `'100%'` | 容器宽度 |
| `height` | `string` | `'100%'` | 容器高度 |
| `placeholderText` | `string \| Function` | - | 占位符文本 |
| `placeholders` | `string[]` | - | 自定义占位符数组 |

## VideoItem 接口

```typescript
interface VideoItem {
  id: string | number      // 唯一标识符
  title?: string          // 视频标题
  url?: string           // 视频URL
  [key: string]: any     // 其他属性
}
```

## 开发模式优势

使用本地包源码的优势：
- 修改包代码后无需重新发布
- 热重载立即生效
- 便于开发和调试
- 实时预览组件变化
