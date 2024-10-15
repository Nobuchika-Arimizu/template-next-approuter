import { NO_IMAGE_PATH } from '@/features/common/constants'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card'
import { NextImage } from '../image/NextImage'
import { NextLink } from '../link/NextLink'

type Props = {
  src?: string
  title: string
  description: string
}

export function BasicCard({ src, title, description }: Props) {
  return (
    <Card>
      <CardHeader className="relative p-0">
        <div className="w-full">
          <NextImage
            src={src || NO_IMAGE_PATH}
            alt={title}
            width={366}
            height={260}
            className="w-full"
          />
        </div>
      </CardHeader>
      <CardContent className="pt-[3rem] pb-[4rem]">
        <CardTitle className="text-[2.4rem] mb-[1.6rem] text-center">{title}</CardTitle>
        <CardDescription className="text-[1.6rem]">{description}</CardDescription>
      </CardContent>
      <CardFooter className="justify-center">
        <NextLink
          href={'/'}
          className="border text-[1.6rem] border-red-500 rounded-md py-[.8rem] px-[2rem]"
        >
          詳しく見る
        </NextLink>
      </CardFooter>
    </Card>
  )
}
