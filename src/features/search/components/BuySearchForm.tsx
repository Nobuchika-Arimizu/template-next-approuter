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
export const BuySearchForm = () => {
  const [filteredPref, setFilteredPref] = useState(prefectures)
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form ref={formRef}>
      <div className="flex flex-col gap-[2rem] justify-center mb-[2rem]">
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
        <div>
          <label htmlFor="searchCondition" className="block mb-[1rem]">
            条件
          </label>
          <fieldset className="items-center gap-[2rem] grid grid-cols-2">
            {propertyType.map(({ id, label }, index) => (
              <div key={id} className="flex items-center space-x-2">
                <Checkbox id={id} name={INPUT_NAMES.PROPERTY_TYPE} value={id} />
                <label htmlFor={id} className="text-sm">
                  {label}
                </label>
              </div>
            ))}
          </fieldset>
        </div>
      </div>
      <div className="flex flex-col gap-[2rem]">
        <Button
          type="submit"
          className="bg-theme mx-auto flex justify-center w-[20rem] h-[4rem] items-center rounded-md p-2 text-white font-bold hover:opacity-80 transition-opacity"
          onClick={() => {
            if (formRef.current) {
              formRef.current.action = ROUTES.BUY_SEARCH_ELIST
            }
          }}
        >
          沿線から探す
        </Button>
        <Button
          type="submit"
          className="bg-theme mx-auto flex justify-center w-[20rem] h-[4rem] items-center rounded-md p-2 text-white font-bold hover:opacity-80 transition-opacity"
          onClick={() => {
            if (formRef.current) {
              formRef.current.action = ROUTES.BUY_SEARCH_ALIST
            }
          }}
        >
          エリアから探す
        </Button>
      </div>
    </form>
  )
}
