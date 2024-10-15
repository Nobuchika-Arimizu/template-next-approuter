type Props = {
  params: { landId: string }
  searchParams: { [key: string]: string | undefined }
}

export default async function DhlistPage({ params }: Props) {
  const landId = params.landId

  return (
    <div className="max-w-[77rem] mx-auto mt-48">
      <h2 className="text-center font-bold text-[2.4rem] mb-5">ほげハウスの分譲マンション・戸建</h2>
      <p className="text-[2rem] mb-[2rem]">ほげハウスの分譲マンション・戸建を探す</p>
    </div>
  )
}
