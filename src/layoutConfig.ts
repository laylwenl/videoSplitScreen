import type { LayoutConfig, VideoPosition } from './types'

/**
 * 所有布局配置
 */
export const LAYOUT_CONFIGS: Record<string, LayoutConfig> = {
  '1': {
    type: '1',
    label: '1分屏',
    count: 1,
    cols: 1,
    rows: 1
  },
  '2': {
    type: '2',
    label: '2分屏',
    count: 2,
    cols: 2,
    rows: 1
  },
  '3': {
    type: '3',
    label: '3分屏',
    count: 3,
    cols: 2,
    rows: 2
  },
  '4': {
    type: '4',
    label: '4分屏',
    count: 4,
    cols: 2,
    rows: 2
  },
  '6': {
    type: '6',
    label: '6分屏',
    count: 6,
    cols: 3,
    rows: 2
  },
  '7': {
    type: '7',
    label: '7分屏',
    count: 7,
    cols: 4,
    rows: 4
  },
  '8': {
    type: '8',
    label: '8分屏',
    count: 8,
    cols: 4,
    rows: 4
  },
  '9': {
    type: '9',
    label: '9分屏',
    count: 9,
    cols: 3,
    rows: 3
  },
  '10': {
    type: '10',
    label: '10分屏',
    count: 10,
    cols: 6,
    rows: 4
  },
  '13': {
    type: '13',
    label: '13分屏',
    count: 13,
    cols: 4,
    rows: 4
  },
  '16': {
    type: '16',
    label: '16分屏',
    count: 16,
    cols: 4,
    rows: 4
  }
}

// 缓存布局位置配置，避免重复计算
const positionsCache: Record<string, VideoPosition[]> = {}

/**
 * 获取布局的视频位置配置
 * @param layoutType 布局类型
 * @returns 视频位置数组
 */
export function getLayoutPositions(layoutType: string): VideoPosition[] {
  // 使用缓存提升性能
  if (positionsCache[layoutType]) {
    return positionsCache[layoutType]
  }
  
  const positions: Record<string, VideoPosition[]> = {
    '1': [
      { col: 1, colSpan: 1, row: 1, rowSpan: 1 }
    ],
    '2': [
      { col: 1, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 1, rowSpan: 1 }
    ],
    '3': [
      { col: 1, colSpan: 1, row: 1, rowSpan: 2, isMain: true },
      { col: 2, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 2, rowSpan: 1 }
    ],
    '4': [
      { col: 1, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 2, rowSpan: 1 }
    ],
    '6': [
      { col: 1, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 2, rowSpan: 1 }
    ],
    '7': [
      { col: 1, colSpan: 2, row: 1, rowSpan: 2 },
      { col: 3, colSpan: 2, row: 1, rowSpan: 2 },
      { col: 1, colSpan: 2, row: 3, rowSpan: 2 },
      { col: 3, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 4, rowSpan: 1 }
    ],
    '8': [
      { col: 1, colSpan: 3, row: 1, rowSpan: 3, isMain: true },
      { col: 4, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 4, rowSpan: 1 }
    ],
    '9': [
      { col: 1, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 3, rowSpan: 1 }
    ],
    '10': [
      { col: 1, colSpan: 5, row: 1, rowSpan: 3, isMain: true },
      { col: 6, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 6, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 6, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 5, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 6, colSpan: 1, row: 4, rowSpan: 1 }
    ],
    '13': [
      { col: 1, colSpan: 2, row: 1, rowSpan: 2, isMain: true },
      { col: 3, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 4, rowSpan: 1 }
    ],
    '16': [
      { col: 1, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 4, rowSpan: 1 }
    ]
  }

  const result = positions[layoutType] || []
  // 缓存结果
  if (result.length > 0) {
    positionsCache[layoutType] = result
  }
  return result
}

/**
 * 获取所有支持的布局类型列表
 */
export function getAllLayoutTypes() {
  return Object.keys(LAYOUT_CONFIGS)
}


