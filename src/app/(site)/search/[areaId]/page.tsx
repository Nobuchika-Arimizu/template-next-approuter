import { areas, prefectures, propertyType } from '@/features/search/constants/index-for-search'

type Props = {
  searchParams: { [key: string]: string | undefined }
}

export default async function Page({ searchParams }: Props) {
  const areaId = searchParams.area_id
  const prefectureIds = searchParams.prefecture_ids?.split(' ') || []
  const conditionIds = searchParams.condition_ids?.split(' ') || []
  const keywordParam = searchParams.keyword

  const areaName = areas.find((a) => a.id === areaId)?.label || '不明なエリア'

  const prefectureNames = prefectureIds
    .map((id) => prefectures.find((p) => p.id === id)?.label)
    .filter(Boolean)

  const matchingConditions = conditionIds
    .map((id) => propertyType.find((c) => c.id === id)?.label)
    .filter(Boolean)

  return (
    <div className="max-w-[77rem] mx-auto mt-48">
      <div className="text-center mb-5">
        <h2 className="font-bold text-[2.4rem]">
          検索文字列からパスが生成されました（URLを見てね）
        </h2>
        <p>このクエリを使ってAPIを叩きます。</p>
      </div>
      <p className="text-[2rem] mb-[2rem]">
        エリア：<span className="ml-[1em]">{areaName}</span>
      </p>
      <p className="text-[2rem] mb-[2rem]">
        都道府県
        {prefectureNames.length > 0 ? (
          prefectureNames.map((name, index) => (
            <span key={index} className="ml-[1em]">
              {name}
            </span>
          ))
        ) : (
          <span className="ml-[1em]">一致なし</span>
        )}
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
