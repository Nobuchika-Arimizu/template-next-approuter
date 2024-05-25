import { areaIndex, conditionIndex } from '../constants/index-for-search'

// エリアのパース関数
function parseArea(area: string) {
  return areaIndex[area] || null
}

// 条件のパース関数
export function parseConditions(conditions: string): {
  conditionIds: string[]
  otherKeywords: string[]
} {
  const decodeConditions = decodeURIComponent(conditions)

  const tokens = decodeConditions.split(' ')

  const conditionIds: string[] = []
  const otherKeywords: string[] = []

  tokens.forEach((token) => {
    if (conditionIndex[token] !== undefined) {
      conditionIds.push(conditionIndex[token])
    } else {
      otherKeywords.push(token)
    }
  })

  return { conditionIds, otherKeywords }
}

// URL生成
export function generateSearchUrl(areaInput: string, conditionInput: string): string | null {
  const areaId = parseArea(areaInput)
  const { conditionIds, otherKeywords } = parseConditions(conditionInput)
  console.log('otherKeywords', otherKeywords)

  if (!areaId) return null

  const conditionParam =
    conditionIds.length > 0 ? `?condition_ids=${encodeURIComponent(conditionIds.join(' '))}` : ''
  const keywordParam =
    otherKeywords.length > 0
      ? `${conditionIds.length > 0 ? '&' : '?'}keyword=${encodeURIComponent(otherKeywords.join(' '))}`
      : ''

  return `/search/${areaId}/${conditionParam}${keywordParam}`
}
