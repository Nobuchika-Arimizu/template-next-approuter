import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'トップページ',
  description: 'テンプレートのアバウトページです。layout.tsxのメタデータを上書きしています。',
}

export default function About() {
  return (
    <main>
      <section className="py-[3rem]">
        <div className="mx-auto max-w-[118rem] px-[2rem]">
          <h2 className="mb-[4rem] text-center text-[4rem] font-bold">About</h2>
          <p>アバウトページです</p>
        </div>
      </section>
    </main>
  )
}
