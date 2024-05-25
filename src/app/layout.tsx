import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.scss'
import { cn } from '@/lib/utils'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: 'Next.js テンプレート',
  description:
    'Next.jsのappRouter対応テンプレートです。最初は取り急ぎ状態から、随時更新していきます。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={cn(notoSansJP.variable, 'font-sans')}>
      <body>{children}</body>
    </html>
  )
}
