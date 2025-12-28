<template>
  <div class="layout-icon">
    <!-- 1分屏：单个全屏 -->
    <svg v-if="type === '1'" viewBox="0 0 48 48" fill="none">
      <rect x="4" y="4" width="40" height="40" stroke="currentColor" stroke-width="2"/>
    </svg>

    <!-- 2分屏：左右分屏 -->
    <svg v-else-if="type === '2'" viewBox="0 0 48 48" fill="none">
      <rect x="4" y="4" width="19" height="40" stroke="currentColor" stroke-width="1.5"/>
      <rect x="25" y="4" width="19" height="40" stroke="currentColor" stroke-width="1.5"/>
    </svg>

    <!-- 3分屏：1大2小（左大右小） -->
    <svg v-else-if="type === '3'" viewBox="0 0 48 48" fill="none">
      <rect x="4" y="4" width="20" height="40" stroke="currentColor" stroke-width="2"/>
      <rect x="26" y="4" width="18" height="19" stroke="currentColor" stroke-width="1.5"/>
      <rect x="26" y="25" width="18" height="19" stroke="currentColor" stroke-width="1.5"/>
    </svg>

    <!-- 4分屏：2x2四宫格 -->
    <svg v-else-if="type === '4'" viewBox="0 0 48 48" fill="none">
      <rect x="4" y="4" width="19" height="19" stroke="currentColor" stroke-width="1.5"/>
      <rect x="25" y="4" width="19" height="19" stroke="currentColor" stroke-width="1.5"/>
      <rect x="4" y="25" width="19" height="19" stroke="currentColor" stroke-width="1.5"/>
      <rect x="25" y="25" width="19" height="19" stroke="currentColor" stroke-width="1.5"/>
    </svg>

    <!-- 6分屏：3x2六宫格 -->
    <svg v-else-if="type === '6'" viewBox="0 0 48 48" fill="none">
      <rect x="3" y="4" width="13" height="18" stroke="currentColor" stroke-width="1.5"/>
      <rect x="18" y="4" width="12" height="18" stroke="currentColor" stroke-width="1.5"/>
      <rect x="32" y="4" width="13" height="18" stroke="currentColor" stroke-width="1.5"/>
      <rect x="3" y="24" width="13" height="18" stroke="currentColor" stroke-width="1.5"/>
      <rect x="18" y="24" width="12" height="18" stroke="currentColor" stroke-width="1.5"/>
      <rect x="32" y="24" width="13" height="18" stroke="currentColor" stroke-width="1.5"/>
    </svg>

    <!-- 7分屏：3大4小（2x2网格，右下角分成4小） -->
    <svg v-else-if="type === '7'" viewBox="0 0 48 48" fill="none">
      <!-- 左上大 -->
      <rect x="4" y="4" width="19" height="19" stroke="currentColor" stroke-width="2"/>
      <!-- 右上大 -->
      <rect x="25" y="4" width="19" height="19" stroke="currentColor" stroke-width="2"/>
      <!-- 左下大 -->
      <rect x="4" y="25" width="19" height="19" stroke="currentColor" stroke-width="2"/>
      <!-- 右下4小 -->
      <rect x="25" y="25" width="9" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="35" y="25" width="9" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="25" y="35" width="9" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="35" y="35" width="9" height="9" stroke="currentColor" stroke-width="1.2"/>
    </svg>

    <!-- 8分屏：1大3右侧4下方 -->
    <svg v-else-if="type === '8'" viewBox="0 0 48 48" fill="none">
      <!-- 左侧大视频 -->
      <rect x="4" y="4" width="28" height="29" stroke="currentColor" stroke-width="2"/>
      <!-- 右侧3个小视频 -->
      <rect x="34" y="4" width="10" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="34" y="14.5" width="10" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="34" y="24.5" width="10" height="8.5" stroke="currentColor" stroke-width="1.2"/>
      <!-- 下方4个小视频 -->
      <rect x="4" y="35" width="9" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="14" y="35" width="9" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="24" y="35" width="9" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="34" y="35" width="10" height="9" stroke="currentColor" stroke-width="1.2"/>
    </svg>

    <!-- 9分屏：3x3九宫格 -->
    <svg v-else-if="type === '9'" viewBox="0 0 48 48" fill="none">
      <rect x="4" y="4" width="12" height="12" stroke="currentColor" stroke-width="1.5"/>
      <rect x="18" y="4" width="12" height="12" stroke="currentColor" stroke-width="1.5"/>
      <rect x="32" y="4" width="12" height="12" stroke="currentColor" stroke-width="1.5"/>
      <rect x="4" y="18" width="12" height="12" stroke="currentColor" stroke-width="1.5"/>
      <rect x="18" y="18" width="12" height="12" stroke="currentColor" stroke-width="1.5"/>
      <rect x="32" y="18" width="12" height="12" stroke="currentColor" stroke-width="1.5"/>
      <rect x="4" y="32" width="12" height="12" stroke="currentColor" stroke-width="1.5"/>
      <rect x="18" y="32" width="12" height="12" stroke="currentColor" stroke-width="1.5"/>
      <rect x="32" y="32" width="12" height="12" stroke="currentColor" stroke-width="1.5"/>
    </svg>

    <!-- 10分屏：1大3右侧6下方 -->
    <svg v-else-if="type === '10'" viewBox="0 0 54 48" fill="none">
      <!-- 左侧大视频 -->
      <rect x="3" y="4" width="36" height="29" stroke="currentColor" stroke-width="2"/>
      <!-- 右侧3个小视频 -->
      <rect x="41" y="4" width="10" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="41" y="14.5" width="10" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="41" y="24.5" width="10" height="8.5" stroke="currentColor" stroke-width="1.2"/>
      <!-- 下方6个小视频 -->
      <rect x="3" y="35" width="7" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="11" y="35" width="7" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="19" y="35" width="7" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="27" y="35" width="7" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="35" y="35" width="6" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="42" y="35" width="9" height="9" stroke="currentColor" stroke-width="1.2"/>
    </svg>

    <!-- 13分屏 -->
    <svg v-else-if="type === '13'" viewBox="0 0 48 48" fill="none">
      <rect x="4" y="4" width="18" height="18" stroke="currentColor" stroke-width="2"/>
      <rect x="24" y="4" width="8" height="8" stroke="currentColor" stroke-width="1.2"/>
      <rect x="34" y="4" width="10" height="8" stroke="currentColor" stroke-width="1.2"/>
      <rect x="24" y="14" width="8" height="8" stroke="currentColor" stroke-width="1.2"/>
      <rect x="34" y="14" width="10" height="8" stroke="currentColor" stroke-width="1.2"/>
      <rect x="4" y="24" width="8" height="8" stroke="currentColor" stroke-width="1.2"/>
      <rect x="14" y="24" width="8" height="8" stroke="currentColor" stroke-width="1.2"/>
      <rect x="24" y="24" width="8" height="8" stroke="currentColor" stroke-width="1.2"/>
      <rect x="34" y="24" width="10" height="8" stroke="currentColor" stroke-width="1.2"/>
      <rect x="4" y="34" width="8" height="10" stroke="currentColor" stroke-width="1.2"/>
      <rect x="14" y="34" width="8" height="10" stroke="currentColor" stroke-width="1.2"/>
      <rect x="24" y="34" width="8" height="10" stroke="currentColor" stroke-width="1.2"/>
      <rect x="34" y="34" width="10" height="10" stroke="currentColor" stroke-width="1.2"/>
    </svg>

    <!-- 16分屏：4x4十六宫格 -->
    <svg v-else-if="type === '16'" viewBox="0 0 48 48" fill="none">
      <rect x="4" y="4" width="9" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="15" y="4" width="9" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="26" y="4" width="9" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="37" y="4" width="7" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="4" y="15" width="9" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="15" y="15" width="9" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="26" y="15" width="9" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="37" y="15" width="7" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="4" y="26" width="9" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="15" y="26" width="9" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="26" y="26" width="9" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="37" y="26" width="7" height="9" stroke="currentColor" stroke-width="1.2"/>
      <rect x="4" y="37" width="9" height="7" stroke="currentColor" stroke-width="1.2"/>
      <rect x="15" y="37" width="9" height="7" stroke="currentColor" stroke-width="1.2"/>
      <rect x="26" y="37" width="9" height="7" stroke="currentColor" stroke-width="1.2"/>
      <rect x="37" y="37" width="7" height="7" stroke="currentColor" stroke-width="1.2"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  type: string
}>()
</script>

<style scoped>
.layout-icon {
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.layout-icon svg {
  width: 100%;
  height: 100%;
}
</style>
