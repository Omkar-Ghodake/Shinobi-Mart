import React, { RefObject, useEffect } from 'react'

const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const element = ref.current

      if (!element || element.contains((event.target as Node) || null)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export default useClickOutside
