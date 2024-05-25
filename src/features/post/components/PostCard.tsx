import { Post } from '../types'

export const PostCard = ({ userId, title, body }: Post) => {
  return (
    <div className="">
      <p>ユーザーID: {userId}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}
