'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactElement, useEffect } from 'react'
import { Button } from '../ui/button'

const NavItem = ({
  item,
  link,
  icon,
  label,
  isNotLink,
}: {
  item: string
  link: string
  icon?: ReactElement
  label?: string
  isNotLink?: boolean
}) => {
  const pathname = usePathname()

  useEffect(() => {}, [pathname])

  return (
    <>
      {isNotLink ? (
        <Button variant={'ghost'} className='flex items-center justify-center'>
          {icon ? (
            <span
              className={`flex justify-center items-center ${label && 'gap-2'}`}
            >
              <span>{icon}</span>
              <span>{label}</span>
            </span>
          ) : (
            <span>{item}</span>
          )}
        </Button>
      ) : (
        <Link href={link} legacyBehavior>
          <a
            className={`${
              pathname === link
                ? 'text-primary font-medium'
                : 'hover:text-primary/70'
            } duration-150`}
          >
            {icon ? (
              <span
                className={`flex justify-center items-center ${
                  label && 'gap-2'
                }`}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </span>
            ) : (
              <span>{item}</span>
            )}
          </a>
        </Link>
      )}
    </>
  )
}

export default NavItem
