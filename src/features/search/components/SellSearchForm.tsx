'use client'

import { searchSubmit } from '@/services/search/searchSubmit'
import { Button } from '@/ui/button/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/form/select'
import { areas, propertyType, prefectures } from '../constants/index-for-search'
import { Checkbox } from '@/ui/form/checkbox'
import { useRef, useState } from 'react'
import { INPUT_NAMES } from '../constants/index-input-names'
import { ROUTES } from '@/features/common/routes'

/**
 *
 * @TODO ブラウザバック対策として入力内容をsessionStorageに保存して初期値とする処理を追加
 */
export const SellSearchForm = () => {
  const [filteredPref, setFilteredPref] = useState(prefectures)

  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form ref={formRef}>
      <div className="mb-[4.6rem] flex flex-col justify-center gap-[2rem]">
        <div>
          <label htmlFor={INPUT_NAMES.PROPERTY_TYPE} className="block">
            物件種別
          </label>
          <Select name={INPUT_NAMES.PROPERTY_TYPE}>
            <SelectTrigger id={INPUT_NAMES.PROPERTY_TYPE}>
              <SelectValue placeholder={'選択してください'} />
            </SelectTrigger>
            <SelectContent>
              {propertyType?.map((item, index) => (
                <SelectItem key={index} value={item.id}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="mr-5">
          <label htmlFor={INPUT_NAMES.AREA} className="block">
            エリア
          </label>
          <div className="min-w-[20rem]">
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
          <div className="min-w-[20rem]">
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
      <div className="flex flex-col gap-[2rem]">
        <Button
          type="submit"
          className="mx-auto flex h-[4rem] w-[20rem] items-center justify-center rounded-md bg-theme p-2 font-bold text-white transition-opacity hover:opacity-80"
          onClick={() => {
            if (formRef.current) {
              formRef.current.action = `${ROUTES.INQUIRY_INQSATEI}`
            }
          }}
        >
          WEBでのお問い合わせ
        </Button>
        <Button
          type="button"
          className="mx-auto flex h-[4rem] w-[20rem] items-center justify-center rounded-md bg-theme p-2 font-bold text-white transition-opacity hover:opacity-80"
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
