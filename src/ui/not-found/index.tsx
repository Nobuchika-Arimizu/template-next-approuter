import Link from 'next/link'
import styles from './style.module.css'

export function NotFound() {
  return (
    <section className="py-[3rem]">
      <div className="mx-auto max-w-[118rem] px-[2rem]">
        <h2 className="mb-[4rem] text-center text-[4rem] font-bold">Not Found</h2>
        <div className="text-center">
          <p className="mb-[2rem]">お探しのページは見つかりませんでした</p>
          <Link
            href={'/'}
            className=" text-theme font-bold hover:opacity-70 transition-opacity text-[1.8rem ]"
          >
            トップへ戻る
          </Link>
        </div>
      </div>
    </section>
  )
}
