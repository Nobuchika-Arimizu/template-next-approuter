'use client'
import { FC } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/css'

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
        <div className="flex min-h-[40rem] w-full items-center justify-center bg-yellow-500 text-[6rem] text-white">
          Slide-1
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="flex min-h-[40rem] w-full items-center justify-center bg-yellow-500 text-[6rem] text-white">
          Slide-2
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="flex min-h-[40rem] w-full items-center justify-center bg-yellow-500 text-[6rem] text-white">
          Slide-3
        </div>
      </SplideSlide>
    </Splide>
  )
}
