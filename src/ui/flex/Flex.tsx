/**
 * レイアウト用のコンポーネント
 * fit: true でflex-itemの高さを揃える
 * 上下の余白を --gap-x, --gap-y で制御する
 *
```
<Flex
  fit={false}
  className="[--gap-x:1rem] md:[--gap-x:2rem] lg:[--gap-x:4rem]"
  classNameWrap=""
>
  <div className="w-full md:w-6/12 lg:w-4/12">
    <div className="bg-theme text-white">ほげ</div>
  </div>
  <div className="w-full md:w-6/12 lg:w-4/12">
    <div className="bg-theme text-white">
      ほげ
      <br />
      ほげ
    </div>
  </div>
  <div className="w-full md:w-6/12 lg:w-4/12">
    <div className="bg-theme text-white">ほげ</div>
  </div>
</Flex>
```
 */

import { FC } from 'react'

type Props = {
  type?: string
  fit?: boolean
  children: React.ReactNode
  className?: string
  classNameWrap?: string
}

export const Flex: FC<Props> = ({
  type = 'div',
  fit = false,
  children,
  className = '',
  classNameWrap = '',
}) => {
  const fitClass = fit ? '[&>*]:flex-row' : '[&>*]:flex-col'
  return (
    <div className={`overflow-hidden ${classNameWrap}`}>
      {type === 'ul' ? (
        <ul
          className={`mx-[calc(var(--gap-x,0rem)*-1)] my-[calc(var(--gap-y,0rem)*-1)] flex flex-wrap ${className} [&>*]:flex [&>*]:min-h-[1px] [&>*]:min-w-0 [&>*]:max-w-full [&>*]:flex-initial [&>*]:px-[var(--gap-x,0rem)] [&>*]:py-[var(--gap-y,0rem)] ${fitClass}`}
        >
          {children}
        </ul>
      ) : (
        <div
          className={`mx-[calc(var(--gap-x,0rem)*-1)] my-[calc(var(--gap-y,0rem)*-1)] flex flex-wrap ${className} [&>*]:flex [&>*]:min-h-[1px] [&>*]:min-w-0 [&>*]:max-w-full [&>*]:flex-initial [&>*]:px-[var(--gap-x,0rem)] [&>*]:py-[var(--gap-y,0rem)] ${fitClass}`}
        >
          {children}
        </div>
      )}
    </div>
  )
}
