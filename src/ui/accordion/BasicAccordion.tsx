'use client'
import { AccordionType } from '@/types/commontypes'
import clsx from 'clsx'
import { FC } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/ui/accordion'

type Props = {
  accordionData: AccordionType[]
}

export const BasicAccordion: FC<Props> = ({ accordionData }) => {
  const qaIconBaseClasses =
    'mr-[1rem] md:mr-[1.5rem] flex h-[3rem] w-[3rem] md:h-[4rem] md:w-[4rem] flex-none items-center justify-center rounded-full pb-[.15em] md:pb-[.1em] font-roboto text-[clamp(1.6rem,calc(22/768*100vw),2.2rem)] font-bold leading-none'

  return (
    <Accordion type="single" collapsible>
      {accordionData.map((data, index) => (
        <AccordionItem value={String(index)} key={index}>
          <AccordionTrigger
            className="w-full rounded bg-gray-100 py-[1rem] pl-[1rem] pr-[4rem] text-left transition-colors hover:text-theme md:pr-[4.4rem] lg:pl-[2rem]"
            aria-controls={`accordion-${index}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center font-bold">
                <span className={`bg-theme text-white ${qaIconBaseClasses}`}>Q</span>
                <h3 className="text-[clamp(1.6rem,calc(18/768*100vw),1.8rem)] font-bold">
                  {data.title}
                </h3>
              </div>

              <div className="absolute right-[1.2rem] top-1/2 flex-none -translate-y-1/2 lg:right-[2rem]">
                <span className="block h-[2px] w-full bg-theme lg:h-[3px]"></span>
                <span
                  className="block h-[2px] w-full bg-theme transition-transform duration-300 ease-in-out"
                  style={{ transform: 'rotate(90deg)' }}
                ></span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="overflow-hidden rounded-b bg-white transition-all duration-300 ease-in-out">
            <div className="pb-[1.5rem] pl-[1rem] pt-[1.5rem] md:pb-[3.5rem] md:pt-[2rem] lg:pl-[2rem]">
              <div className="flex">
                <span className={`${qaIconBaseClasses} border`}>A</span>
                <div className="mt-[-.4em] leading-[1.8]">{data.text}</div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
