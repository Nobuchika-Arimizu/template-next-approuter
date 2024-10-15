'use server'

import { generateSearchUrl } from '@/features/search/functions/generateSearchUrl'
import { redirect } from 'next/navigation'

export const searchSubmit = (formData: FormData) => {
  const areaInputValue = formData.get('searchArea')
  const prefectureInputValues = formData.getAll('searchPrefecture')
  const conditionInputValues = formData.getAll('searchCondition')

  // 入力値の検証と安全な取得
  const safeAreaInputValue = typeof areaInputValue === 'string' ? areaInputValue : ''
  const safePrefectureInputValues = prefectureInputValues.filter(
    (value): value is string => typeof value === 'string',
  )
  const safeConditionInputValues = conditionInputValues.filter(
    (value): value is string => typeof value === 'string',
  )

  const generatedPath = generateSearchUrl(
    safeAreaInputValue,
    safePrefectureInputValues,
    safeConditionInputValues,
  )

  redirect(generatedPath ?? '/')
}
