import { SITE_NAME } from '@/constants'
import { getPostFromId } from '@/services/post/getPostFromId'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
  params: { postId: string }
}

// 動的にメタデータを生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { post } = await getPostFromId({ id: params.postId })
  if (!post) {
    notFound()
  }
  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.body,
  }
}

// ページコンポーネント
export default async function Page({ params }: Props) {
  const { post } = await getPostFromId({ id: params.postId })

  return (
    <div className="max-w-[77rem] mx-auto mt-48">
      <h2 className="text-center font-bold text-[2.4rem] mb-5">{post.title}</h2>
      <p>{post?.body}</p>
    </div>
  )
}
