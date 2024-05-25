import type { Metadata } from 'next'
import RootLayout from '../layout'

export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <RootLayout>
      <div className="bg-theme py-[5rem]">
        <h2 className="text-white font-bold text-center text-[3.2rem]">
          認証が必要なルーティングです。
        </h2>
      </div>
      <div>{children}</div>
    </RootLayout>
  )
}
