/**
 * 構造化データを出力するコンポーネント
 * @param {WithContext<Thing>} schema 例：createBreadcrumbJsonLd(items)
 */
import { ReactElement } from 'react'
import { Thing, WithContext } from 'schema-dts'

type Props = {
  schema: WithContext<Thing>
}

export default function JsonLd({ schema }: Props): ReactElement {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
