import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '中古住宅・中古マンションを買いたい｜ほげほげ｜ほげハウス｜ほげハウスグループ',
  description:
    '中古住宅・中古マンション・宅地をお探しの方は、ほげハウスグループのほげほげ＜ほげハウス＞にお任せください。',
}

export default function About() {
  return (
    <section className="py-[3rem]">
      <div className="mx-auto max-w-[118rem] px-[2rem]">
        <h2 className="mb-[4rem] text-center text-[4rem] font-bold">買いたい</h2>
        <p>中古住宅・中古マンションを買いたい</p>
      </div>
    </section>
  )
}
