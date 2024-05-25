import { areaIndex, conditionIndex } from '@/features/search/constants/index-for-search'

type Props = {
  params: { areaId: string }
  searchParams: { [key: string]: string | undefined }
}

/**
 *
 * @memo 動作イメージだけつかむために検索パラメータからマスタ情報（index-for-search.ts）に一致するキーを表示しています
 */
export default async function Page({ params, searchParams }: Props) {
  const searchParamId = params.areaId
  const searchConditionIds = searchParams.condition_ids?.split(' ') || []
  const keywordParam = searchParams.keyword

  const areaName = Object.keys(areaIndex).find((key) => areaIndex[key] === searchParamId)

  const matchingConditions = searchConditionIds
    .map((id) => {
      const condition = Object.keys(conditionIndex).find((key) => conditionIndex[key] === id)
      return condition ? condition : null
    })
    .filter(Boolean)

  return (
    <div className="max-w-[77rem] mx-auto mt-48">
      <h2 className="text-center font-bold text-[2.4rem] mb-5">
        検索文字列からパスが生成されました（URLを見てね）
      </h2>
      <p className="text-[2rem] mb-[2rem]">
        エリア：<span className="ml-[1em]">{areaName}</span>
      </p>
      <p className="text-[2rem] mb-[2rem]">
        条件
        {matchingConditions.length > 0 ? (
          matchingConditions.map((condition, index) => (
            <span key={index} className="ml-[1em]">
              {condition}
            </span>
          ))
        ) : (
          <span className="ml-[1em]">一致なし</span>
        )}
      </p>
      <p className="text-[2rem] mb-[2rem]">
        キーワード<span className="ml-[1em]">{keywordParam || 'なし'}</span>
      </p>
    </div>
  )
}
