/**
 * パンクズリストコンポーネント
 * @param {BreadcrumbItem[]}  items パンクズに表示するタイトルとパスのオブジェクトの配列
 */
import { ReactElement } from 'react'
import { BreadcrumbItem, createBreadcrumbJsonLd } from '../functions/createBreadcrumbJsonLd'
import { NextLink } from '@/ui/link/NextLink'
import JsonLd from './JsonLd'

type Props = {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: Props): ReactElement {
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex gap-[.8rem]">
          {items.map(({ pathName, title }, index) => (
            <li key={index} className="flex items-center">
              {items.length === index + 1 ? (
                <span className="text-gray-500">{title}</span>
              ) : (
                <NextLink href={pathName} className="text-theme hover:underline">
                  {title}
                </NextLink>
              )}
              {items.length !== index + 1 && (
                <span className="mx-[.8rem] text-gray-400" aria-hidden="true">
                  &gt;
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd schema={createBreadcrumbJsonLd(items)} />
    </>
  )
}
