/**
 * 布局类型定义
 * 支持的分屏数量：1/2/3/4/6/7/8/9/10/13/16
 */
export type LayoutType = '1' | '2' | '3' | '4' | '6' | '7' | '8' | '9' | '10' | '13' | '16'

/**
 * 视频项基础接口
 */
export interface BaseVideoItem {
  /** 唯一标识符 */
  id: string | number
  /** 视频标题（可选） */
  title?: string
  /** 视频URL（可选） */
  url?: string
}

/**
 * 布局配置接口
 */
export interface LayoutConfig {
  /** 布局类型 */
  type: LayoutType
  /** 布局名称 */
  label: string
  /** 视频数量 */
  count: number
  /** 网格列数 */
  cols: number
  /** 网格行数 */
  rows: number
  /** 自定义行高比例（可选），如 '2fr 1fr' */
  rowTemplate?: string
  /** 自定义列宽比例（可选），如 '2fr 1fr 1fr' */
  colTemplate?: string
}

/**
 * 视频位置配置
 */
export interface VideoPosition {
  /** 网格列起始位置 */
  col: number
  /** 网格列结束位置 */
  colSpan: number
  /** 网格行起始位置 */
  row: number
  /** 网格行结束位置 */
  rowSpan: number
  /** 是否是主视频 */
  isMain?: boolean
}

