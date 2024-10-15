import { ContentsContainer } from '@/ui/layout/container/ContentsContainer'
import { Metadata } from 'next'
import { areas, prefectures, propertyType } from '@/features/search/constants/index-for-search'
import { getParamAsArray } from '@/features/search/functions/getParamAsArray'

type Props = {
  searchParams: { [key: string]: string | undefined }
}
export const metadata: Metadata = {
  title: '中古住宅・中古マンションを買いたい｜Lほげほげ｜ほげハウスリ｜ほげハウスグループ',
  description:
    '中古住宅・中古マンション・宅地をお探しの方は、ほげハウスグループのLほげほげ＜ほげハウスリ＞にお任せください。',
}

export default function SearchAlistPage({ searchParams }: Props) {
  const areaId = searchParams.searchArea
  const prefectureId = searchParams.searchPrefecture
  const conditionIds = getParamAsArray(searchParams.searchCondition)
  const keywordParam = searchParams.keyword

  const areaName = areas.find((a) => a.id === areaId)?.label || '不明なエリア'

  const prefectureNames = prefectures.find((p) => p.id === prefectureId)?.label

  const matchingConditions = conditionIds
    .map((id) => propertyType.find((c) => c.id === id)?.label)
    .filter(Boolean)

  console.log('searchParams.searchCondition', searchParams.searchCondition)

  return (
    <div>
      <section className="mb-[3rem]">
        <div className="mx-auto text-center  max-w-[118rem] px-[2rem]">
          <h2 className="mb-[2rem] text-[4rem] font-bold">買いたい</h2>
          <p>中古住宅・中古マンションを買いたい</p>
        </div>
      </section>
      <section>
        <div className="max-w-[77rem] mx-auto">
          {/* <div className="text-center mb-5">
            <h2 className="font-bold text-[2.4rem]">
              検索文字列からパスが生成されました（URLを見てね）
            </h2>
            <p>このクエリを使ってAPIを叩きます。</p>
          </div> */}
          <p className="text-[2rem] mb-[2rem]">
            エリア：<span className="ml-[1em]">{areaName}</span>
          </p>
          <p className="text-[2rem] mb-[2rem]">
            都道府県：
            <span className="ml-[1em]">{prefectureNames}</span>
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
      </section>
    </div>
  )
}
