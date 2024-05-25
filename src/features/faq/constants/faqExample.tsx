import Link from 'next/link'
import { FaqType } from '../types'

const listCss = 'mt-[1rem] text-theme font-bold hover:opacity-70 transition-opacity'

export const FAQ_EXAMPLE: FaqType = {
  faqContent: [
    {
      title: '熊本で美味しいラーメン屋さんはどこですか？',
      text: (
        <>
          <div className="mb-[2rem]">
            <p>良い質問ですね</p>
            <p>
              熊本ラーメンといえばやはり「文龍」でしょう。こってりが好きならぜひ食べてみてください。こってりとは何かという哲学を学びながら最高のラーメンを味わうことができます。
            </p>
            <p>
              また、「天外天」もおすすめです。ニンニクパウダーが効いており、他では食べられない熊本ならではのアクセントで、とても美味しいラーメンとなっています。
            </p>
          </div>
          <ul className="mb-[2rem]">
            <li className={listCss}>
              ・<Link href={'https://tabelog.com/kumamoto/A4301/A430101/43000770/'}>文龍</Link>
            </li>
            <li className={listCss}>
              ・<Link href={'https://tabelog.com/kumamoto/A4301/A430101/43013050/'}>天外天</Link>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: '自作PCを組む上で考慮すべき項目は何でしょうか？',
      text: (
        <>
          <div className="mb-[2rem]">
            <p>グラフィックボードをどれにするかが大事です。</p>
            <p>
              グラフィックボードを選ぶ際は、GPUメモリ（VRAM）も重要です。大きいにこしたことはありません。
            </p>
            <p>
              しかしながら、ハイエンドなものを買う必要はありません。なぜなら１〜２年で新しいものが出てくるので、いいのを買ってもすぐに陳腐化します。中くらいので十分です。
            </p>
            <p>
              あとはとにかく光らせましょう。自作PCは光らせてなんぼです。そうすることであなたの未来も輝くでしょう。
            </p>
          </div>
        </>
      ),
    },
  ],
}
