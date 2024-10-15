type Props = {
  params: { mansionId: string }
  searchParams: { [key: string]: string | undefined }
}

export default async function MansionDetailPage({ params }: Props) {
  const mansionId = params.mansionId

  return (
    <div className="max-w-[77rem] mx-auto mt-48">
      <h2 className="text-center font-bold text-[2.4rem] mb-5">売買物件詳細（マンション）</h2>
      <p className="text-[2rem] mb-[2rem]">
        マンションID<span className="ml-[1em]">{mansionId} </span>
      </p>
    </div>
  )
}
