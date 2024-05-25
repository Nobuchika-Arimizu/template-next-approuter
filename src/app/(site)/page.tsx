import { FAQ_EXAMPLE } from '@/features/faq/constants/faqExample'
import { BasicAccordion } from '@/ui/accordion/BasicAccordion'
import { MainVisualSlider } from '@/ui/slider/MainVisualSlider'
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
      {/* 検索 */}
      <section className="py-[3rem]">
        <div className="mx-auto max-w-[118rem] px-[2rem]">
          <h2 className="mb-[4rem] text-center text-[3.2rem] font-bold">検索の動作イメージ</h2>
          <p className="text-center mb-[2rem]">
            検索結果ページでの処理のためのパス生成の例を実装しています
          </p>
          <div className="mb-[4rem] text-center">
            <Link
              href={'/search'}
              className="text-[2rem] text-theme font-bold hover:opacity-70 transition-opacity"
            >
              検索ページへ
            </Link>
          </div>
        </div>
      </section>
      {/* 動的ルーティング */}
      <section className="py-[3rem]">
        <div className="mx-auto max-w-[118rem] px-[2rem]">
          <h2 className="mb-[4rem] text-center text-[3.2rem] font-bold">動的ルーティング</h2>
          <div className="mb-[4rem] text-center">
            <Link
              href={'/post/1'}
              className="text-[2rem] text-theme font-bold hover:opacity-70 transition-opacity"
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
