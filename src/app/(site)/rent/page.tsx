import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    '賃貸運用したい（サブリースシステム・管理代行）｜ほげほげ｜ほげハウスリアルエステート｜ほげハウスグループ',
  description:
    '不動産・土地活用（サブリース・管理代行）をお考えの方へ。ほげハウスグループのほげほげ＜ほげハウスリアルエステート＞にお任せください。',
}

export default function About() {
  return (
    <section className="py-[3rem]">
      <div className="mx-auto max-w-[118rem] px-[2rem]">
        <h2 className="mb-[4rem] text-center text-[4rem] font-bold">賃貸運用したい</h2>
        <p>賃貸運用したい（サブリースシステム・管理代行）</p>
      </div>
    </section>
  )
}
