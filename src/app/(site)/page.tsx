import { FAQ_EXAMPLE } from '@/features/faq/constants/faqExample'
import { BuySearchForm } from '@/features/search/components/BuySearchForm'
import { RentSearchForm } from '@/features/search/components/RentSearchForm'
import { SellSearchForm } from '@/features/search/components/SellSearchForm'
import { TenpoSearchSection } from '@/features/tenpo/components/TenpoSearchSection'
import { BasicAccordion } from '@/ui/accordion/BasicAccordion'
import { BannerSection } from '@/ui/banner/BannerSection'
import { BasicCard } from '@/ui/card/BasicImageCard'
import { ContentsContainer } from '@/ui/layout/container/ContentsContainer'
import { NextLink } from '@/ui/link/NextLink'
import { MainVisualSlider } from '@/ui/slider/MainVisualSlider'
import { PickupTab } from '@/ui/tab/PickupTab'
import { Metadata } from 'next'
import Link from 'next/link'

// 動的なメタデータ生成
export const generateMetadata = async ({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
  const data = await res.json()

  return {
    title: data.title,
    description: `ディスクリプション:${params.id} ${data.body}`,
  }
}

export default function Home() {
  return (
    <main>
      {/* メインビジュアルスライダー */}
      <MainVisualSlider />

      {/* バナーセクション */}
      <ContentsContainer>
        <BannerSection />
      </ContentsContainer>

      {/**
       * ピックアップコンテンツ
       */}
      <section className="py-[4rem]">
        <ContentsContainer>
          <h2 className="mb-[4rem] text-center text-[3.2rem] font-bold">ピックアップコンテンツ</h2>
          <PickupTab />
        </ContentsContainer>
      </section>

      {/* 検索 */}
      <section className="bg-gray-200 py-[3rem]">
        <ContentsContainer className="px-[2rem]">
          <h2 className="mb-[3rem] text-center text-[3.2rem] font-bold">検索</h2>
          <p className="mb-[5rem] text-center">検索実装予定</p>
          <div className="mb-[4rem] grid grid-cols-3 gap-[3rem]">
            <div className="relative mb-[4rem] bg-white px-[2.4rem] py-[3rem]">
              <h3 className="absolute -top-[2.4rem] left-[-2rem] mb-[2rem] bg-theme px-[2rem] py-[1rem] text-lg font-bold text-white">
                買いたい
              </h3>
              <BuySearchForm />
            </div>
            <div className="relative mb-[4rem] bg-white px-[2.4rem] py-[3rem]">
              <h3 className="absolute -top-[2.4rem] left-[-2rem] mb-[2rem] bg-theme px-[2rem] py-[1rem] text-lg font-bold text-white">
                売りたい
              </h3>
              <SellSearchForm />
            </div>
            <div className="relative mb-[4rem] bg-white px-[2.4rem] py-[3rem]">
              <h3 className="absolute -top-[2.4rem] left-[-2rem] mb-[2rem] bg-theme px-[2rem] py-[1rem] text-lg font-bold text-white">
                借りたい
              </h3>
              <BuySearchForm />
            </div>
          </div>
          <div className="relative mb-[4rem] bg-white px-[2.4rem] py-[3rem]">
            <h3 className="absolute -top-[2.4rem] left-[-2rem] mb-[2rem] bg-theme px-[2rem] py-[1rem] text-lg font-bold text-white">
              賃貸運用したい
            </h3>
            <RentSearchForm />
          </div>
        </ContentsContainer>
      </section>

      {/* 物件特集 */}
      <section className="py-[4rem]">
        <ContentsContainer>
          <h2 className="mb-[4rem] text-center text-[3.2rem] font-bold">物件特集</h2>
          <div className="flex gap-[1.6rem]">
            <div className="w-1/3">
              <BasicCard
                title="ほげほげハウスのマンション特集"
                description="現在販売中のほげほげハウスの中古マンション情報をご覧いただけます。"
              />
            </div>
            <div className="w-1/3">
              <BasicCard
                title="ほげほげハウスの中古住宅特集"
                description="現在販売中のスムストックを含むほげほげハウスの中古住宅情報をご覧いただけます。"
              />
            </div>
            <div className="w-1/3">
              <BasicCard
                title="オープンハウス物件特集"
                description="オープンハウス・現地見学会を開催している物件をご覧いただけます。"
              />
            </div>
          </div>
        </ContentsContainer>
      </section>

      {/* 店舗から探す */}
      <section className="bg-gray-100 py-[4rem]">
        <TenpoSearchSection />
      </section>

      {/* 動的ルーティング */}
      <section className="py-[3rem]">
        <div className="mx-auto max-w-[118rem] px-[2rem]">
          <h2 className="mb-[4rem] text-center text-[3.2rem] font-bold">新着情報</h2>
          <div className="mb-[4rem] text-center">
            <Link
              href={'/post/1'}
              className="text-[2rem] font-bold text-theme transition-opacity hover:opacity-70"
            >
              てすと記事（jsonplaceholder）
            </Link>
          </div>
        </div>
      </section>

      {/* アコーディオン */}
      <section className="py-[3rem]">
        <div className="mx-auto max-w-[118rem] px-[2rem]">
          <h2 className="mb-[4rem] text-center text-[3.2rem] font-bold">アコーディオン</h2>
          <div className="mb-[4rem]">
            <BasicAccordion accordionData={FAQ_EXAMPLE.faqContent} />
          </div>
        </div>
      </section>
    </main>
  )
}
