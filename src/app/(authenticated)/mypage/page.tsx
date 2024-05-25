import { Metadata } from 'next'
import { notFound } from 'next/navigation'

// 実装例
// export async function generateMetadata(): Promise<Metadata> {
//   // バックエンドからログイン情報を取得する関数を作成
//   const session = await getServerSession();
//   if (!session) {
//     notFound();
//   }
//   return { title: `${session.user.name}さんのマイページ | ${SITE_NAME}` };
// }

export default function Mypage() {
  return (
    <main>
      <section className="py-[3rem]">
        <div className="mx-auto max-w-[118rem] px-[2rem]">
          <h2 className="mb-[4rem] text-center text-[4rem] font-bold">マイページ</h2>
          <div className="text-center">
            <p>こちらはマイページです</p>
            <p>認可の処理を入れましょう。</p>
          </div>
        </div>
      </section>
    </main>
  )
}
