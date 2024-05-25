import { SearchInput } from '@/features/search/components/SearchInput'

export default async function Page() {
  return (
    <div className="max-w-[77rem] mx-auto mt-48">
      <h2 className="text-center font-bold text-[2.4rem] mb-5">検索てすと</h2>
      <p className="text-center mb-[2rem]">
        実装の参考として検索ワードからパス生成をする動作のイメージです
      </p>
      <SearchInput />
    </div>
  )
}
