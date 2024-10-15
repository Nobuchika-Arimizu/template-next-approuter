/**
 * コンテンツ幅を定義するコンポーネント
 * @param classNames: 追加のCSS
 * @param size: コンテンツ幅の指定
 */
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import { ComponentPropsWithoutRef, ElementType } from 'react'

type ContentsContainerProps<T extends ElementType> = {
  size?: 'xs' | 'sm' | 'md' | 'lg'
} & ComponentPropsWithoutRef<T>

const containerVariants = cva('mx-auto w-full px-[2rem]', {
  variants: {
    size: {
      xs: 'max-w-[76rem]',
      sm: 'max-w-[101rem]',
      md: 'max-w-[121rem]',
      lg: 'max-w-[124rem]',
    },
  },
})

export function ContentsContainer<T extends ElementType = 'div'>({
  id,
  as,
  children,
  className,
  size = 'md',
  ...props
}: ContentsContainerProps<T>) {
  const Component = as || 'div'
  return (
    <Component id={id} className={cn(containerVariants({ size }), className)} {...props}>
      {children}
    </Component>
  )
}
