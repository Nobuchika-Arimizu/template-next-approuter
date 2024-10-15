'use client'
import { FC } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/css'
import { NextImage } from '../image/NextImage'
import { NextLink } from '../link/NextLink'

export const MainVisualSlider: FC = () => {
  return (
    <Splide
      aria-label="メインビジュアル"
      tag="section"
      options={{
        rewind: true,
        type: 'loop',
        gap: '30px',
        speed: 1000,
        rewindSpeed: 500,
        perPage: 1,
        arrows: true,
        pagination: true,
        autoplay: true,
        pauseOnFocus: false,
        interval: 4000,
      }}
    >
      <SplideSlide>
        <div className="relative min-h-[50rem] w-full items-center justify-center text-[6rem] text-white">
          <NextImage
            src="/images/sample/visual01.jpg"
            className="w-full block h-[50rem] object-cover"
            sizes="100vw"
            fill
            alt=""
            priority
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[87rem] h-full">
            <NextImage
              src="/images/sample/slider01.png"
              sizes="auto"
              fill
              alt="ほげハウスグループとして未来を創る。一つひとつの不動産に、ベストな「答え」を探す。"
              priority
            />
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="relative min-h-[50rem] w-full items-center justify-center text-[6rem] text-white">
          <NextImage
            src="/images/sample/visual04.jpg"
            className="w-full block h-[50rem] object-cover"
            sizes="100vw"
            fill
            alt="Livness（リブネス）はほげハウスグループが取り扱う中古戸建・中古マンションに関する事業ブランドです"
            priority
          />
          <NextLink
            href={'/'}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[87rem] h-full hover:bg-white/20 transition"
          >
            <NextImage
              src="/images/sample/slider04.png"
              fill
              sizes="auto"
              alt="ほげハウスグループとして未来を創る。一つひとつの不動産に、ベストな「答え」を探す。"
              priority
            />
          </NextLink>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="relative min-h-[50rem] w-full items-center justify-center text-[6rem] text-white">
          <NextImage
            src="/images/sample/visual05.jpg"
            className="w-full block h-[50rem] object-cover"
            sizes="100vw"
            fill
            alt=""
            priority
          />
          <NextLink
            href={'/'}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[87rem] h-full hover:bg-white/20 transition"
          >
            <NextImage
              src="/images/sample/slider05.png"
              sizes="auto"
              fill
              alt="「新築から『再生と循環』へ」 "
              priority
            />
          </NextLink>
        </div>
      </SplideSlide>
    </Splide>
  )
}
