import type { Metadata } from 'next'
import RootLayout from '../layout'
import { BasicHeader } from '@/ui/layout/header/BasicHeader'
import { BasicFooter } from '@/ui/layout/footer/BasicFooter'

export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {/**
       * @todo 認証済みのヘッダーにする必要がある場合は別途作成する
       */}
      <BasicHeader />
      <section>
        <div className="bg-theme py-[5rem]">
          <h2 className="text-white font-bold text-center text-[3.2rem]">
            認証が必要なルーティングです。
          </h2>
        </div>
        <main>{children}</main>
      </section>
      <BasicFooter />
    </>
  )
}
