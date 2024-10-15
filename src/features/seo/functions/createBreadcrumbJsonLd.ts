/**
 * パンクズリスト用のオブジェクトを生成します
 * @param {BreadcrumbItem[]}  items パンクズに表示するタイトルとパスのオブジェクトの配列
 * @returns schema
 */

import type { BreadcrumbList, WithContext } from 'schema-dts'

export type BreadcrumbItem = {
  pathName: string
  title: string
}

export function createBreadcrumbJsonLd(items: BreadcrumbItem[]): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ pathName, title }, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: title,
      item: `${process.env.NEXT_PUBLIC_BASE_URL}${pathName}`,
    })),
  }
}
