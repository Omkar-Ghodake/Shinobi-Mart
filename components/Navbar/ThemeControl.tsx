'use client'

import React, { ReactElement } from 'react'
import NavItem from './NavItem'
import { useTheme } from '@/context/ThemeState'

type NavItem = {
  item: string
  link: string
  icon: ReactElement
  isNotLink: boolean
}

const ThemeControl = ({ navItem }: { navItem: any }) => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      {theme === 'light' && navItem.item === 'Dark Mode' && (
        <li
          className='flex items-center'
          onClick={() => {
            setTheme('dark')
          }}
        >
          <NavItem
            item={navItem.item}
            link={navItem.link}
            icon={navItem.icon}
            isNotLink={navItem.isNotLink}
          />
        </li>
      )}

      {theme === 'dark' && navItem.item === 'Light Mode' && (
        <li
          className='flex items-center'
          onClick={() => {
            setTheme('light')
          }}
        >
          <NavItem
            item={navItem.item}
            link={navItem.link}
            icon={navItem.icon}
            isNotLink={navItem.isNotLink}
          />
        </li>
      )}
    </>
  )
}

export default ThemeControl
