/*
 *SPメニューOPEN時はスクロールを禁止するhooks
 * useLockBodyScroll(isOpen)
 */

import { useEffect } from 'react'

export function useLockBodyScroll(isLocked: boolean): void {
  useEffect(() => {
    const body = document.body
    const originnalStyle = body.style.overflow

    if (isLocked) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = originnalStyle || 'auto'
    }

    return () => {
      body.style.overflow = originnalStyle || 'auto'
    }
  }, [isLocked])
}
