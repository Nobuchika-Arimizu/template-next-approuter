import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.scss'
import { cn } from '@/lib/utils'
import { GoogleTagManager } from '@next/third-parties/google'

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
  // gtmId
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || null

  return (
    <html lang="ja" className={cn(notoSansJP.variable, 'font-sans')}>
      <head>
        <meta name="google-site-verification" content="xxxxxxxxxxxxxxxx" />
      </head>
      {gtmId && <GoogleTagManager gtmId="GTM-KHCXQD92" />}
      <body>
        {/**
         * @todo 以下ヘッダーはスタイリングなど冗長なので要修正
         */}
        {children}
      </body>
    </html>
  )
}
