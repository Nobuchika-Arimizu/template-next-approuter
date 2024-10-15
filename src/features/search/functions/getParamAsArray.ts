/**
 * URLパラメータを配列に整形して返す
 * @param param URLパラメータ
 * @returns 配列
 */
export function getParamAsArray(param: string | string[] | undefined): string[] {
  if (Array.isArray(param)) {
    return param
  } else if (typeof param === 'string') {
    return [param]
  } else {
    return []
  }
}
