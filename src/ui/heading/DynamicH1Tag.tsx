/**
 * 動的にh1タグとh2タグを切り替えるコンポーネント
 */
'use client'
import { usePathname } from 'next/navigation'
import { FC, HTMLAttributes, useEffect, useState } from 'react'

type Props = {
  className?: string
  children: React.ReactNode
} & HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>

export const DynamicH1Tag: FC<Props> = ({ className = '', children = null, ...props }) => {
  // TOPページがどうか
  const [isTopPage, setIsTopPage] = useState(false)
  const pagePath = usePathname()
  useEffect(() => {
    setIsTopPage(pagePath === '/')
  }, [pagePath])

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
