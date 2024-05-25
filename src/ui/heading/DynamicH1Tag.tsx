/**
 * 動的にh1タグとh2タグを切り替えるコンポーネント
 */
import { FC, HTMLAttributes } from 'react'

type Props = {
  isTopPage?: boolean
  className?: string
  children: React.ReactNode
} & HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>

export const DynamicH1Tag: FC<Props> = ({
  isTopPage = false,
  className = '',
  children = null,
  ...props
}) => {
  // h1タグとdivタグで分岐
  if (isTopPage) {
    return (
      <h1 className={`${className}`} {...props}>
        {children}
      </h1>
    )
  }
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  )
}
