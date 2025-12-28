#!/bin/bash

# VideoSplitScreen 示例运行脚本

echo "🎬 VideoSplitScreen 示例项目"
echo "=============================="

# 检查是否安装了依赖
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖..."
    npm install
fi

echo "🚀 启动开发服务器..."
echo "📱 浏览器访问: http://localhost:5173"
echo "🔧 修改包代码后会自动热重载"
echo ""
echo "注意：此示例直接使用本地包源码，无需npm安装包！"
echo ""

npm run dev
