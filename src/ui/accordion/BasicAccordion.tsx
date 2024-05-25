'use client'
import { AccordionType } from '@/types/commontypes'
import clsx from 'clsx'
import { FC, useEffect, useRef, useState } from 'react'

type Props = {
  accordionData: AccordionType[]
}
export const BasicAccordion: FC<Props> = ({ accordionData }) => {
  const [showContents, setShowContents] = useState<boolean[]>([])
  const contentHeight = useRef<number[]>([])
  const childElements = useRef<(HTMLDivElement | null)[]>([])

  const toggleAccordion = (index: number) => {
    const newShowContents = [...showContents]
    newShowContents[index] = !newShowContents[index]
    setShowContents(newShowContents)

    if (childElements.current[index]) {
      const newContentHeight = [...contentHeight.current]
      newContentHeight[index] = childElements.current[index]?.clientHeight as number
      contentHeight.current = newContentHeight
    }
  }

  // デフォルトで最初の１つは開いておく記述（不必要なら削除）
  useEffect(() => {
    toggleAccordion(0)
    // eslint-disable-next-line
  }, [])

  const qaIconBaseClasses =
    'mr-[1rem] md:mr-[1.5rem] flex h-[3rem] w-[3rem] md:h-[4rem] md:w-[4rem] flex-none items-center justify-center rounded-full pb-[.15em] md:pb-[.1em] font-roboto text-[clamp(1.6rem,calc(22/768*100vw),2.2rem)] font-bold leading-none'

  return (
    <div>
      {accordionData.map((data, index) => {
        return (
          <div key={index} className="mb-[0.5rem] text-[1.4rem] last:mb-0 md:text-[1.6rem]">
            <div className="relative">
              <button
                type="button"
                className="w-full rounded bg-gray-100 py-[1rem] pl-[1rem] pr-[4rem] text-left transition-colors hover:text-theme md:pr-[4.4rem] lg:pl-[2rem]"
                onClick={() => toggleAccordion(index)}
                aria-controls={`accordion-${index}`}
                aria-expanded={showContents[index]}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center font-bold">
                    <span className={`bg-theme text-white ${qaIconBaseClasses}`}>Q</span>
                    <h3 className="text-[clamp(1.6rem,calc(18/768*100vw),1.8rem)] font-bold">
                      {data.title}
                    </h3>
                  </div>

                  <div className="absolute right-[1.2rem] top-1/2 flex-none -translate-y-1/2 lg:right-[2rem]">
                    <div className="relative h-[1.6rem] w-[1.6rem] lg:h-[2rem] lg:w-[2rem]">
                      <span
                        className={`absolute top-[50%] block h-[2px] w-full translate-y-[-50%] bg-theme lg:h-[3px]`}
                      ></span>
                      <span
                        className={clsx(
                          'absolute top-[50%] block h-[2px] w-full translate-y-[-50%] bg-theme transition-all',
                          {
                            'lg:h-[3px]': true,
                            'rotate-180 opacity-0': showContents[index],
                            'rotate-90 opacity-100': !showContents[index],
                          },
                        )}
                      ></span>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div
              style={{
                height: showContents[index] ? `${contentHeight.current[index]}px` : '0px',
                opacity: showContents[index] ? 1 : 0,
              }}
              className={`overflow-hidden rounded-b bg-white transition-all duration-300 ease-in-out`}
            >
              <div
                ref={(el) => {
                  childElements.current[index] = el
                }}
                className="pb-[1.5rem] pl-[1rem] pt-[1.5rem] md:pb-[3.5rem] md:pt-[2rem] lg:pl-[2rem]"
              >
                <div className="flex">
                  <span className={`${qaIconBaseClasses} border border-red_e75d68 text-red_e75d68`}>
                    A
                  </span>
                  <div className="mt-[-.4em] leading-[1.8] ">{data.text}</div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
