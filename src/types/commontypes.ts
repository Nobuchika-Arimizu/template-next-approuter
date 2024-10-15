import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

export type AccordionType = {
  title: string
  text: string | JSX.Element
}

export type DynamicComponent<T extends ElementType> = {
  as?: T
  children?: ReactNode
} & ComponentPropsWithoutRef<T>
