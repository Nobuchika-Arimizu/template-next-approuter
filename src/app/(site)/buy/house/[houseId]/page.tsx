type Props = {
  params: { houseId: string }
  searchParams: { [key: string]: string | undefined }
}

export default async function HouseDetailPage({ params }: Props) {
  const houseId = params.houseId

  return (
    <div className="max-w-[77rem] mx-auto mt-48">
      <h2 className="text-center font-bold text-[2.4rem] mb-5">売買物件詳細（戸建て）</h2>
      <p className="text-[2rem] mb-[2rem]">
        ハウスID<span className="ml-[1em]">{houseId} </span>
      </p>
    </div>
  )
}
