import { SearchSidebar } from '@/features/search/components/SearchSidebar'

import { ContentsContainer } from '@/ui/layout/container/ContentsContainer'

type Props = {
  children: React.ReactNode
  searchParams: { [key: string]: string | undefined }
}
export default function SearchLayout({ children, searchParams }: Props) {
  return (
    <ContentsContainer size="sm" className="w-full mx-auto md:px-[2rem] px-[1.6rem]">
      <div className="grid gap-12 py-[3rem] grid-cols-[25rem_1fr] mt-[4rem]">
        <SearchSidebar />
        <main>{children}</main>
      </div>
    </ContentsContainer>
  )
}
