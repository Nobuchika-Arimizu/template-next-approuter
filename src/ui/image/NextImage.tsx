/**
 * next/imageのラップ
 */
import type { ImageProps } from 'next/image'
import Image from 'next/image'

export function NextImage({ ...props }: ImageProps) {
  return <Image {...props} alt={props?.alt || ''} />
}
