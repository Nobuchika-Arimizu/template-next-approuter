'use server'

import { generateSearchUrl } from '@/features/search/functions/generateSearchUrl'
import { redirect } from 'next/navigation'

export const searchSubmit = (formData: FormData) => {
  const areaInputValue = formData.get('searchArea')
  const conditionInputValue = formData.get('searchCondition')

  // string型でなければ、空文字列を使用する
  const safeAreaInputValue = typeof areaInputValue === 'string' ? areaInputValue : ''
  const safeConditionInputValue =
    typeof conditionInputValue === 'string' ? encodeURIComponent(conditionInputValue) : ''

  const generatedPath = generateSearchUrl(safeAreaInputValue, safeConditionInputValue)

  redirect(generatedPath ?? '/')
}
