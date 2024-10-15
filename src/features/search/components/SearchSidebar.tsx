'use client'
import { Button } from '@/ui/button/button'
import { Input } from '@/ui/form/input'
import { useSearchParams } from 'next/navigation'
import {
  areaSizes,
  propertyType,
  prefectures,
  prices,
  rooms,
  stationWalk,
  kodawariConditions,
} from '../constants/index-for-search'
import { Checkbox } from '@/ui/form/checkbox'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from '@/ui/form/select'
import { INPUT_NAMES } from '../constants/index-input-names'
import { ROUTES } from '@/features/common/routes'

/**
 * 検索レイアウト用サイドバー
 */
export function SearchSidebar() {
  // const areaId = useSearchParams().get('searchArea')
  const keywordParam = useSearchParams().get(INPUT_NAMES.KEYWORD)
  const prefectureId = useSearchParams().get(INPUT_NAMES.PREFECTURE) || ''
  const minPriceParam = useSearchParams().get(INPUT_NAMES.MIN_PRICE)
  const maxPriceParam = useSearchParams().get(INPUT_NAMES.MAX_PRICE)
  const propertyIds = useSearchParams().getAll(INPUT_NAMES.PROPERTY_TYPE) || []
  const roomsParams = useSearchParams().getAll(INPUT_NAMES.ROOMS) || []
  const minAreaSizeParam = useSearchParams().get(INPUT_NAMES.MIN_AREA_SIZE)
  const maxAreaSizeParam = useSearchParams().get(INPUT_NAMES.MAX_AREA_SIZE)
  const stationWalkParam = useSearchParams().get(INPUT_NAMES.STATION_WALK)
  const conditionsParam = useSearchParams().getAll(INPUT_NAMES.CONDITION) || []

  const [selectedPref, setSelectedPref] = useState<string>(prefectureId)

  // const areaName = areas.find((a) => a.id === areaId)?.label || '不明なエリア'

  const prefectureNames = prefectures.find((p) => p.id === selectedPref)?.label || '不明'

  return (
    <aside>
      <form
        action={ROUTES.BUY_SEARCH_ALIST}
        className="flex flex-col gap-[4rem] [&_h3]:mb-[2rem] [&_h3]:bg-gray-200 [&_h3]:px-[1.5rem] [&_h3]:py-[1.6rem] [&_h3]:text-[1.8rem] [&_h3]:font-bold"
      >
        <div>
          <h3>キーワードで探す</h3>
          <Input
            name={INPUT_NAMES.KEYWORD}
            className="mb-[2rem]"
            defaultValue={keywordParam || ''}
          />
          <Button className="flex w-full items-center justify-center bg-red-500 py-[2.5rem] text-white">
            検索結果を表示
          </Button>
        </div>
        <div>
          <h3>エリア</h3>
          <div className="flex items-center justify-between">
            <p>{prefectureNames}</p>
            <input name={INPUT_NAMES.PREFECTURE} type="hidden" value={selectedPref} />
            <Button className="flex items-center justify-center rounded-lg border border-red-500 bg-white px-[2rem] py-[1.8rem] text-red-500">
              地域を変更
            </Button>
          </div>
        </div>
        <div>
          <h3>絞り込み条件</h3>
          <div className="flex flex-col gap-[2rem]">
            <div>
              <h4 className="mb-[1.2rem]">物件種別</h4>
              <fieldset className="flex flex-col gap-[1rem]">
                {propertyType.map(({ id, label }, index) => (
                  <div key={id} className="flex items-center space-x-2">
                    <Checkbox
                      id={id}
                      name={INPUT_NAMES.PROPERTY_TYPE}
                      value={id}
                      defaultChecked={propertyIds.includes(id)}
                    />
                    <label htmlFor={id} className="text-sm">
                      {label}
                    </label>
                  </div>
                ))}
              </fieldset>
            </div>
            <div>
              <h4 className="mb-[1.2rem]">価格</h4>
              <div className="mb-[.8rem]">
                <Select name={INPUT_NAMES.MIN_PRICE} defaultValue={minPriceParam || '0'}>
                  <SelectTrigger>
                    <SelectValue placeholder={'下限なし'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">下限なし</SelectItem>
                    {prices?.map((item, index) => (
                      <SelectItem key={index} value={item.id}>
                        {item.label}以上
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Select name={INPUT_NAMES.MAX_PRICE} defaultValue={maxPriceParam || '999999'}>
                <SelectTrigger>
                  <SelectValue placeholder={'上限なし'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {prices?.map((item, index) => (
                      <SelectItem key={index} value={item.id}>
                        {item.label}未満
                      </SelectItem>
                    ))}
                    <SelectItem value="999999">上限なし</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h4 className="mb-[1.2rem]">間取り</h4>
              <fieldset className="flex flex-col gap-[1rem]">
                {rooms.map(({ id, label }, index) => (
                  <div key={id} className="flex items-center space-x-2">
                    <Checkbox
                      id={id}
                      name={INPUT_NAMES.ROOMS}
                      value={id}
                      defaultChecked={roomsParams.includes(id)}
                    />
                    <label htmlFor={id} className="text-sm">
                      {label}
                    </label>
                  </div>
                ))}
              </fieldset>
            </div>
            <div>
              <h4 className="mb-[1.2rem]">専有面積・建物面積</h4>
              <div className="mb-[.8rem]">
                <Select name={INPUT_NAMES.MIN_AREA_SIZE} defaultValue={minAreaSizeParam || '0'}>
                  <SelectTrigger>
                    <SelectValue placeholder={'下限なし'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">下限なし</SelectItem>
                    {areaSizes?.map((item, index) => (
                      <SelectItem key={index} value={item.id}>
                        {item.label}以上
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Select name={INPUT_NAMES.MAX_AREA_SIZE} defaultValue={maxAreaSizeParam || '999999'}>
                <SelectTrigger>
                  <SelectValue placeholder={'上限なし'} />
                </SelectTrigger>
                <SelectContent>
                  {areaSizes?.map((item, index) => (
                    <SelectItem key={index} value={item.id}>
                      {item.label}未満
                    </SelectItem>
                  ))}
                  <SelectItem value="999999">上限なし</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h4 className="mb-[1.2rem]">駅徒歩</h4>
              <Select name={INPUT_NAMES.STATION_WALK} defaultValue={stationWalkParam || '99'}>
                <SelectTrigger>
                  <SelectValue placeholder={'上限なし'} />
                </SelectTrigger>
                <SelectContent>
                  {stationWalk?.map((item, index) => (
                    <SelectItem key={index} value={item.id}>
                      {item.label}
                    </SelectItem>
                  ))}
                  <SelectItem value="99">指定なし</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h4 className="mb-[1.2rem]">こだわり条件</h4>
              <fieldset className="flex flex-col gap-[1rem]">
                {kodawariConditions.map(({ id, label }, index) => (
                  <div key={id} className="flex items-center space-x-2">
                    <Checkbox
                      id={id}
                      name={INPUT_NAMES.CONDITION}
                      value={id}
                      defaultChecked={conditionsParam.includes(id)}
                    />
                    <label htmlFor={id} className="text-sm">
                      {label}
                    </label>
                  </div>
                ))}
              </fieldset>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          className="flex w-full items-center justify-center bg-red-500 py-[2.5rem] text-white"
        >
          検索結果を表示
        </Button>
      </form>
    </aside>
  )
}
