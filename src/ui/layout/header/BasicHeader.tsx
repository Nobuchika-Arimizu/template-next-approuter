'use client'
import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { DynamicH1Tag } from '../../heading/DynamicH1Tag'
import { cn } from '@/lib/utils'
import { NextLink } from '../../link/NextLink'
import { NextImage } from '../../image/NextImage'
import { usePathname, useRouter } from 'next/navigation'
import { ROUTES } from '@/features/common/routes'

type Props = {
  classNames?: string
  isFixedHeader?: boolean
}

export const BasicHeader: FC<Props> = ({ classNames = '', isFixedHeader = false }) => {
  // ハンバーガーメニューの開閉状態
  const [isOpen, setIsOpen] = useState(false)

  // SPメニューOPEN時はbodyのスクロールを禁止
  useLockBodyScroll(isOpen)

  // 電話番号・お問い合わせボタンエリア
  const infoAreaComponent: JSX.Element = (
    <>
      <div className={`hidden flex-none lg:block`}>
        <div className="mx-auto flex items-end justify-center">
          <div className="relative top-[-.1em] mx-[1rem] mb-[1rem] flex items-center justify-center lg:mb-0 lg:h-auto lg:bg-transparent">
            <a
              href={`tel:000-000-0000`}
              className="flex w-full items-end justify-center leading-none md:pointer-events-none md:cursor-default"
            >
              <span className="mr-[0.8rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="25px"
                  viewBox="0 0 18 25"
                >
                  <path
                    fillRule="evenodd"
                    className="fill-current text-sub_theme"
                    d="M1.615,1.69 C0.2,2.138 0.313,5.480 0.294,8.204 C0.768,10.325 1.776,13.171 3.476,15.851 C5.75,18.371 7.306,20.631 9.7,21.939 C11.191,23.618 14.305,24.685 15.917,23.616 C16.732,23.76 17.944,21.599 17.999,21.334 C17.999,21.334 17.289,20.214 17.133,19.967 L14.751,16.212 C14.574,15.933 13.464,16.189 12.900,16.514 C12.139,16.956 11.439,18.139 11.439,18.139 C10.917,18.447 10.480,18.139 9.567,17.710 C8.445,17.182 7.184,15.542 6.180,14.57 C5.263,12.514 4.313,10.668 4.300,9.405 C4.288,8.378 4.192,7.846 4.680,7.485 C4.680,7.485 6.22,7.312 6.726,6.781 C7.247,6.388 7.928,5.456 7.751,5.178 L5.369,1.422 C5.213,1.177 4.502,0.56 4.502,0.56 C4.243,0.0 2.430,0.529 1.615,1.69 Z"
                  />
                </svg>
              </span>
              000-000-0000
            </a>
          </div>
        </div>

        <Link
          href={'/search'}
          className="group flex h-[4rem] w-[23rem] max-w-full items-center justify-center rounded-[50vh] border-2 border-gray_999999 bg-white text-center font-bold text-gray_999999 transition-colors hover:bg-theme hover:text-white"
        >
          <span className="mr-[0.8rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.188"
              height="16.25"
              viewBox="0 0 16.188 16.25"
              className="block h-[1.7rem] w-[1.7rem] fill-current text-inherit"
            >
              <path
                fillRule="evenodd"
                d="M893.933,75.9a6.52,6.52,0,0,0-.9-8.042,6.438,6.438,0,0,0-9.125,0,6.514,6.514,0,0,0,0,9.17,6.438,6.438,0,0,0,8,.9l4.292,4.313,2.02-2.029Zm-2.525-.507a4.14,4.14,0,0,1-5.867,0,4.191,4.191,0,0,1,0-5.9,4.14,4.14,0,0,1,5.867,0A4.19,4.19,0,0,1,891.408,75.4Z"
                transform="translate(-882.031 -66)"
              />
            </svg>
          </span>
          <span className="pb-[0.2rem]">検索</span>
        </Link>
      </div>
    </>
  )

  return (
    <>
      <header id="layout-header" className={cn('relative z-50 bg-white border-b', classNames)}>
        <div
          className={`mx-auto max-w-[142rem] px-[1.4rem] pb-[1.1rem] pt-[0.7rem] lg:px-[4rem] lg:pb-[2.2rem] lg:pt-[1.4rem]`}
        >
          <div className="relative z-[900]">
            <div className="flex items-center justify-between">
              {/*
               * 動的にh1を切り替え
               */}
              <DynamicH1Tag className="lg:mr-[2rem]">
                <NextLink href={ROUTES.HOME}>
                  <NextImage
                    src="/images/sample/header_logo03.png"
                    width={100}
                    height={69}
                    alt="ほげハウスグループ"
                    priority
                  />
                </NextLink>
              </DynamicH1Tag>

              {infoAreaComponent}
            </div>
          </div>

          {/* ナビゲーション */}
          <nav className={`hidden font-bold lg:mt-[2.1rem] lg:block`}>
            <ul className="flex justify-center">
              <li>
                <NextLink
                  href={ROUTES.BUY_KYUSHU}
                  className="block px-[2.4rem] py-[0.3rem] transition-colors hover:bg-theme hover:text-white desktop:px-[3rem]"
                >
                  買いたい
                </NextLink>
              </li>
              <li className="border-l border-gray_cccccc">
                <Link
                  href="/sell"
                  className="block px-[2.4rem] py-[0.3rem] transition-colors hover:bg-theme hover:text-white desktop:px-[3rem]"
                >
                  売りたい
                </Link>
              </li>
              <li className="border-l border-gray_cccccc">
                <Link
                  href="/borrow"
                  className="block px-[2.4rem] py-[0.3rem] transition-colors hover:bg-theme hover:text-white desktop:px-[3rem]"
                >
                  借りたい
                </Link>
              </li>
              <li className="border-l border-gray_cccccc">
                <Link
                  href="/rent"
                  className="block px-[2.4rem] py-[0.3rem] transition-colors hover:bg-theme hover:text-white desktop:px-[3rem]"
                >
                  賃貸運用したい
                </Link>
              </li>
              <li className="group relative border-l border-gray_cccccc">
                <div className="flex cursor-pointer items-center px-[2.4rem] py-[0.3rem] transition-colors hover:text-theme desktop:px-[3rem]">
                  ホバーメニュー
                  <span className="ml-[1em] pt-[0.2rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.03"
                      height="6.031"
                      viewBox="0 0 10.03 6.031"
                      className="fill-current text-sub_theme transition-all group-hover:-rotate-180"
                    >
                      <path
                        id="arrowBottom.svg"
                        d="M1198.3,132.687l-4-3.962a0.99,0.99,0,0,1,0-1.4,1,1,0,0,1,1.41,0l3.3,3.252,3.29-3.334a1.013,1.013,0,0,1,1.42-.016,0.993,0.993,0,0,1,.02,1.4l-4.01,4.052a1,1,0,0,1-.71.3A1.021,1.021,0,0,1,1198.3,132.687Z"
                        transform="translate(-1194 -126.938)"
                      />
                    </svg>
                  </span>
                </div>
                <div className="absolute -left-1/2 top-full z-10 hidden pt-[1.5rem] opacity-0 transition-opacity group-hover:block group-hover:opacity-100">
                  <ul className="[&>li]:group w-[37rem] rounded border-2 border-theme bg-white px-[2rem] py-[1rem] shadow-md [&>a]:transition-colors [&>a]:hover:bg-gray_fdf6e8 [&>li]:border-b [&>li]:border-gray_cccccc">
                    <li className="">
                      <Link
                        href="/"
                        className="flex items-center justify-between px-[2rem] py-[1.75rem] transition-colors hover:bg-gray_fdf6e8"
                      >
                        メニュー
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5px"
                            height="9px"
                            viewBox="0 0 5 9"
                            className="fill-current text-theme"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.756,5.66 L1.469,8.270 C1.309,8.427 1.99,8.506 0.888,8.506 C0.678,8.506 0.468,8.427 0.307,8.270 C0.13,7.957 0.13,7.450 0.307,7.138 L3.6,4.504 L0.239,1.866 C0.84,1.557 0.90,1.49 0.226,0.733 C0.544,0.418 1.64,0.413 1.388,0.720 L4.749,3.926 C4.907,4.77 4.996,4.281 4.997,4.494 C4.998,4.709 4.911,4.914 4.756,5.66 Z"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href="/"
                        className="flex items-center justify-between px-[2rem] py-[1.75rem] transition-colors hover:bg-gray_fdf6e8"
                      >
                        メニュー
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5px"
                            height="9px"
                            viewBox="0 0 5 9"
                            className="fill-current text-theme"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.756,5.66 L1.469,8.270 C1.309,8.427 1.99,8.506 0.888,8.506 C0.678,8.506 0.468,8.427 0.307,8.270 C0.13,7.957 0.13,7.450 0.307,7.138 L3.6,4.504 L0.239,1.866 C0.84,1.557 0.90,1.49 0.226,0.733 C0.544,0.418 1.64,0.413 1.388,0.720 L4.749,3.926 C4.907,4.77 4.996,4.281 4.997,4.494 C4.998,4.709 4.911,4.914 4.756,5.66 Z"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href="/"
                        className="flex items-center justify-between px-[2rem] py-[1.75rem] transition-colors hover:bg-gray_fdf6e8"
                      >
                        メニュー
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5px"
                            height="9px"
                            viewBox="0 0 5 9"
                            className="fill-current text-theme"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.756,5.66 L1.469,8.270 C1.309,8.427 1.99,8.506 0.888,8.506 C0.678,8.506 0.468,8.427 0.307,8.270 C0.13,7.957 0.13,7.450 0.307,7.138 L3.6,4.504 L0.239,1.866 C0.84,1.557 0.90,1.49 0.226,0.733 C0.544,0.418 1.64,0.413 1.388,0.720 L4.749,3.926 C4.907,4.77 4.996,4.281 4.997,4.494 C4.998,4.709 4.911,4.914 4.756,5.66 Z"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="flex items-center justify-between px-[2rem] py-[1.75rem] transition-colors hover:bg-gray_fdf6e8"
                      >
                        メニュー
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5px"
                            height="9px"
                            viewBox="0 0 5 9"
                            className="fill-current text-theme"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.756,5.66 L1.469,8.270 C1.309,8.427 1.99,8.506 0.888,8.506 C0.678,8.506 0.468,8.427 0.307,8.270 C0.13,7.957 0.13,7.450 0.307,7.138 L3.6,4.504 L0.239,1.866 C0.84,1.557 0.90,1.49 0.226,0.733 C0.544,0.418 1.64,0.413 1.388,0.720 L4.749,3.926 C4.907,4.77 4.996,4.281 4.997,4.494 C4.998,4.709 4.911,4.914 4.756,5.66 Z"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="flex items-center justify-between px-[2rem] py-[1.75rem] transition-colors hover:bg-gray_fdf6e8"
                      >
                        メニュー
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5px"
                            height="9px"
                            viewBox="0 0 5 9"
                            className="fill-current text-theme"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.756,5.66 L1.469,8.270 C1.309,8.427 1.99,8.506 0.888,8.506 C0.678,8.506 0.468,8.427 0.307,8.270 C0.13,7.957 0.13,7.450 0.307,7.138 L3.6,4.504 L0.239,1.866 C0.84,1.557 0.90,1.49 0.226,0.733 C0.544,0.418 1.64,0.413 1.388,0.720 L4.749,3.926 C4.907,4.77 4.996,4.281 4.997,4.494 C4.998,4.709 4.911,4.914 4.756,5.66 Z"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li className="border-none">
                      <Link
                        href="/"
                        className="flex items-center justify-between px-[2rem] py-[1.75rem] transition-colors hover:bg-gray_fdf6e8"
                      >
                        メニュー
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5px"
                            height="9px"
                            viewBox="0 0 5 9"
                            className="fill-current text-theme"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.756,5.66 L1.469,8.270 C1.309,8.427 1.99,8.506 0.888,8.506 C0.678,8.506 0.468,8.427 0.307,8.270 C0.13,7.957 0.13,7.450 0.307,7.138 L3.6,4.504 L0.239,1.866 C0.84,1.557 0.90,1.49 0.226,0.733 C0.544,0.418 1.64,0.413 1.388,0.720 L4.749,3.926 C4.907,4.77 4.996,4.281 4.997,4.494 C4.998,4.709 4.911,4.914 4.756,5.66 Z"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        {/* ハンバーガーボタン */}
        <div className={`absolute right-0 top-0 z-[1020]`}>
          <button
            aria-label="Menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-[6rem] w-[6rem] items-center justify-center rounded-none bg-white focus:outline-none lg:hidden"
          >
            <div className="relative h-[2rem] w-[3rem]">
              <span
                className={`absolute left-0 top-0 h-[0.3rem] w-full rounded-[50vh] bg-sub_theme transition ${
                  isOpen ? 'translate-y-[0.85rem] rotate-[-45deg]' : 'translate-y-0 rotate-0'
                }`}
              ></span>
              <span
                className={`absolute left-0  top-[0.8rem] h-[0.3rem] w-full rounded-[50vh] bg-sub_theme transition ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`absolute bottom-0 left-0 h-[0.3rem] w-full rounded-[50vh] bg-sub_theme transition ${
                  isOpen ? 'translate-y-[-0.85rem] rotate-[45deg]' : ' translate-y-0 rotate-0'
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* SPメニュー */}
        {/* SPメニューOPEN時の半透明の背景 */}
        <>
          <div
            className={`top-y-[6rem] fixed left-0 z-50 max-h-screen w-full overflow-auto bg-white/95 pb-[8rem] shadow-lg`}
            style={{
              transform: `${isOpen ? 'translateX(0)' : 'translateX(100vw)'}`,
              opacity: `${isOpen ? '1' : '0'}`,
              transitionProperty: 'transform, opacity',
              transitionDuration: '0.3s',
              transitionTimingFunction: 'ease-in-out',
            }}
          >
            <ul className="mb-[4rem] px-[2rem] pt-[2rem] font-bold" role="presentation">
              <li>
                <Link href={'/'} id="sp_nav-to-high">
                  <div className="border-gray_999 flex items-center justify-between border-y-[1px] py-[1.6rem] pl-[0.8rem] pr-[1.4rem]">
                    <p>ナビリンク</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/" id="sp_nav-to-junior">
                  <div className="border-gray_999 flex items-center justify-between border-b-[1px] py-[1.6rem] pl-[0.8rem] pr-[1.4rem]">
                    <p>ナビリンク</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/" id="sp_nav-to-elementary">
                  <div className="border-gray_999 flex items-center justify-between border-b-[1px] py-[1.6rem] pl-[0.8rem] pr-[1.4rem]">
                    <p>ナビリンク</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/" id="sp_nav-to-feature">
                  <div className="border-gray_999 flex items-center justify-between border-b-[1px] py-[1.6rem] pl-[0.8rem] pr-[1.4rem]">
                    <p>ナビリンク</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <button
            className={`${
              isOpen ? 'block' : 'hidden opacity-0'
            } fixed inset-0 z-40 bg-white opacity-50 transition duration-300 ease-in-out`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="ハンバーガーメニューの開閉"
          ></button>
        </>
      </header>
    </>
  )
}
