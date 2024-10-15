/**
 * 「店舗から探す」のリンク集セクション
 */
import { ROUTES } from '@/features/common/routes'
import { ContentsContainer } from '@/ui/layout/container/ContentsContainer'
import { NextLink } from '@/ui/link/NextLink'

export function TenpoSearchSection() {
  return (
    <ContentsContainer size="sm">
      <h2 className="mb-[4rem] text-center text-[3.2rem] font-bold">店舗から探す</h2>
      <div className="mb-[3rem]">
        <p>
          北海道から九州まで全国に広がるほげハウスの店舗ネットワークで、お客様の住まい探しをサポート。
        </p>
        <p>
          それぞれのエリアに密着した活動で集めた豊富な物件情報を取り揃えています。
          お近くの店舗でも、または引っ越し先の店舗でも、お客様のご要望にお応えする物件をご紹介いたします。
        </p>
      </div>
      <div className="mx-auto flex max-w-[66rem] flex-wrap gap-[2rem]">
        <NextLink
          href={ROUTES.TENPO_KITA}
          className="flex h-[6rem] w-[20rem] items-center justify-center rounded-md bg-theme p-2 font-bold text-white transition-opacity hover:opacity-80"
        >
          北海道・東北エリア
        </NextLink>
        <NextLink
          href={ROUTES.TENPO_KANTO}
          className="flex h-[6rem] w-[20rem] items-center justify-center rounded-md bg-theme p-2 font-bold text-white transition-opacity hover:opacity-80"
        >
          関東エリア
        </NextLink>
        <NextLink
          href={ROUTES.TENPO_CHUBU}
          className="flex h-[6rem] w-[20rem] items-center justify-center rounded-md bg-theme p-2 font-bold text-white transition-opacity hover:opacity-80"
        >
          中部エリア
        </NextLink>
        <NextLink
          href={ROUTES.TENPO_KANSAI}
          className="flex h-[6rem] w-[20rem] items-center justify-center rounded-md bg-theme p-2 font-bold text-white transition-opacity hover:opacity-80"
        >
          関西エリア
        </NextLink>
        <NextLink
          href={ROUTES.TENPO_KYUSHU}
          className="flex h-[6rem] w-[20rem] items-center justify-center rounded-md bg-theme p-2 font-bold text-white transition-opacity hover:opacity-80"
        >
          九州エリア
        </NextLink>
      </div>
    </ContentsContainer>
  )
}
