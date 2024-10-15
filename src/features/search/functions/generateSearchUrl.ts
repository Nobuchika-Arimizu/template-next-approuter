import { prefectures, propertyType, areas } from '../constants/index-for-search'

// 条件のパース関数
export function parseConditions(conditionsInput: string): {
  conditionIds: string[]
  otherKeywords: string[]
} {
  const decodeConditions = decodeURIComponent(conditionsInput)
  const tokens = decodeConditions.split(' ')

  const conditionIds: string[] = []
  const otherKeywords: string[] = []

  tokens.forEach((token) => {
    const condition = propertyType.find((c) => c.label === token)
    if (condition) {
      conditionIds.push(condition.id)
    } else {
      otherKeywords.push(token)
    }
  })

  return { conditionIds, otherKeywords }
}

// URL生成
export function generateSearchUrl(
  areaId: string,
  prefectureIds: string[],
  conditionIds: string[],
): string {
  const params = new URLSearchParams()

  if (areaId) {
    params.append('area_id', areaId)
  }

  prefectureIds.forEach((id) => {
    params.append('prefecture_ids', id)
  })

  conditionIds.forEach((id) => {
    params.append('condition_ids', id)
  })

  return `/buy/search/alist/?${params.toString()}`
}
