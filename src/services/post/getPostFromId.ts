'use server'
import { Post } from '@/features/post/types'

type Props = {
  id: string
  revalidate?: number
}

export async function getPostFromId({ id, revalidate }: Props): Promise<{ post: Post }> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      tags: [`/api/photos/${id}`],
      ...(revalidate !== undefined && { revalidate }),
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch post')
  }

  const post: Post = await response.json()
  return { post }
}
