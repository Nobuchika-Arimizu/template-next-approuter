import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '賃貸住宅・賃貸マンションを借りたい｜ほげほげ｜ほげほげ｜ほげハウスグループ',
  description:
    '賃貸住宅・賃貸マンション・宅地をお探しの方は、ほげハウスグループのほげほげ＜ほげほげ＞にお任せください。',
}

export default function About() {
  return (
    <section className="py-[3rem]">
      <div className="mx-auto max-w-[118rem] px-[2rem]">
        <h2 className="mb-[4rem] text-center text-[4rem] font-bold">借りたい</h2>
        <p>賃貸住宅・賃貸マンションを借りたい</p>
      </div>
    </section>
  )
}
