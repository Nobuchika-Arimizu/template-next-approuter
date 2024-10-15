import { BasicFooter } from '@/ui/layout/footer/BasicFooter'
import { BasicHeader } from '@/ui/layout/header/BasicHeader'

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <BasicHeader />
      <main>{children}</main>
      <BasicFooter />
    </>
  )
}
