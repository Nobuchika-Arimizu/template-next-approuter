/*
 *  next/linkをラップしたコンポーネント
 *  例）<NextLink href={'/about'}>アバウト</NextLink>
 */

import type { ReactNode } from 'react'

import type { LinkProps as NextLinkProps } from 'next/link'
import Link from 'next/link'

interface LinkProps extends NextLinkProps {
  children: ReactNode
  className?: string
  openInNewTab?: boolean
  id?: string
}

export function NextLink({
  href,
  children,
  className,
  openInNewTab = false,
  id,
  as,
  ...props
}: LinkProps) {
  // `target` と `rel` を条件付きで追加
  const targetProps = openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <Link href={href} as={as} id={id} className={className} {...targetProps} {...props}>
      {children}
    </Link>
  )
}
