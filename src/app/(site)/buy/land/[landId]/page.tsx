type Props = {
  params: { landId: string }
  searchParams: { [key: string]: string | undefined }
}

export default async function LandDetailPage({ params }: Props) {
  const landId = params.landId

  return (
    <div className="max-w-[77rem] mx-auto mt-48">
      <h2 className="text-center font-bold text-[2.4rem] mb-5">売買物件詳細（土地）</h2>
      <p className="text-[2rem] mb-[2rem]">
        土地ID<span className="ml-[1em]">{landId} </span>
      </p>
    </div>
  )
}
