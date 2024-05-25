'use client'
import React from 'react'
import { searchSubmit } from '@/services/search/searchSubmit'

// サーバーアクションを使用しています。
export const SearchInput = () => {
  return (
    <form action={searchSubmit}>
      <div className="flex flex-1 justify-center mb-[2rem]">
        <div className="mr-5">
          <label htmlFor="searchArea" className="block">
            エリア
          </label>
          <input
            id="searchArea"
            name="searchArea"
            type="search"
            className="border rounded-md px-2"
            placeholder="例：東京都"
          />
        </div>
        <div>
          <label htmlFor="searchCondition" className="block">
            条件
          </label>
          <input
            id="searchCondition"
            name="searchCondition"
            type="search"
            className="border rounded-md px-2"
            placeholder="例：歯医者"
          />
        </div>
      </div>
      <button className="bg-theme mx-auto flex justify-center w-[20rem] h-[4rem] items-center rounded-md p-2 text-white font-bold hover:opacity-80 transition-opacity">
        検索
      </button>
    </form>
  )
}
