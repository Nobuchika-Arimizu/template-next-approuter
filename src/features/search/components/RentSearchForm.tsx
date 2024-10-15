'use client'

import { Button } from '@/ui/button/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/form/select'
import {
  areas,
  prefectures,
  propertyOptions,
  consultationTypes,
} from '../constants/index-for-search'
import { useRef, useState } from 'react'
import { INPUT_NAMES } from '../constants/index-input-names'
import { ROUTES } from '@/features/common/routes'
import { RadioGroup, RadioGroupItem } from '@/ui/form/radio-group'

export const RentSearchForm = () => {
  const [filteredPref, setFilteredPref] = useState(prefectures)
  const [filteredConsultationTypes, setFilteredConsultationTypes] = useState(consultationTypes)

  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form ref={formRef}>
      <div className="mb-[2rem] flex flex-col justify-center gap-[2rem]">
        <div>
          <label>物件種別</label>
          <RadioGroup
            id={INPUT_NAMES.PROPERTY_OPTION}
            name={INPUT_NAMES.PROPERTY_OPTION}
            className="flex gap-[4rem]"
            onValueChange={(value) => {
              setFilteredConsultationTypes(
                consultationTypes.filter((types) => {
                  return types.propertyTypes === value
                }),
              )
            }}
          >
            {propertyOptions.map((item) => (
              <div key={item.id} className="flex items-center space-x-2">
                <RadioGroupItem value={item.id} id={item.id} />
                <label htmlFor={item.id}>{item.label}</label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <div className="min-w-[20rem] max-w-[40rem]">
          <label>相談種別</label>
          <Select name={INPUT_NAMES.CONSULTATION_TYPE}>
            <SelectTrigger>
              <SelectValue placeholder="選択してください" />
            </SelectTrigger>
            <SelectContent>
              {filteredConsultationTypes.map((item) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="mr-5">
            <label htmlFor={INPUT_NAMES.AREA} className="block">
              エリア
            </label>
            <div className="min-w-[20rem] max-w-[40rem]">
              <Select
                autoComplete={INPUT_NAMES.AREA}
                name={INPUT_NAMES.AREA}
                onValueChange={(value) => {
                  setFilteredPref(
                    prefectures.filter((pref) => {
                      return value === pref.areaId
                    }),
                  )
                }}
              >
                <SelectTrigger id={INPUT_NAMES.AREA}>
                  <SelectValue placeholder={'選択してください'} />
                </SelectTrigger>
                <SelectContent>
                  {areas?.map((item, index) => (
                    <SelectItem key={index} value={item.id}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mr-5">
            <label htmlFor={INPUT_NAMES.PREFECTURE} className="block">
              都道府県
            </label>
            <div className="min-w-[20rem] max-w-[40rem]">
              <Select name={INPUT_NAMES.PREFECTURE}>
                <SelectTrigger>
                  <SelectValue placeholder={'選択してください'} />
                </SelectTrigger>
                <SelectContent>
                  {filteredPref?.map((item, index) => (
                    <SelectItem key={index} value={item.id}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-[2rem]">
        <Button
          type="submit"
          className="flex h-[4rem] w-[20rem] items-center justify-center rounded-md bg-theme p-2 font-bold text-white transition-opacity hover:opacity-80"
          onClick={() => {
            if (formRef.current) {
              formRef.current.action = `${ROUTES.INQUIRY_INQRENT}`
            }
          }}
        >
          WEBでのお問い合わせ
        </Button>
        <Button
          type="button"
          className="flex h-[4rem] w-[20rem] items-center justify-center rounded-md bg-theme p-2 font-bold text-white transition-opacity hover:opacity-80"
          onClick={() => {
            if (formRef.current) {
              formRef.current.action = ROUTES.TENPO
              const formData = new FormData(formRef.current)
              const predectureParam = formData.get(INPUT_NAMES.PREFECTURE)

              // const prefectureName = prefectures.find((prefecture) => {
              //   prefecture.id === predectureParam
              // })?.label
              // クエリ付きのURLにリダイレクト
              /**
               * @TODO 既存に合わせるなら/kanto/#tokyo の形式に整形する必要あり
               */
              const targetUrl = `${ROUTES.TENPO}/${predectureParam}`

              window.location.href = targetUrl
            }
          }}
        >
          電話でのお問い合わせ
        </Button>
      </div>
    </form>
  )
}
