import { primaryLinks } from '@/lib/data/navbar-links'
import React from 'react'
import NavItem from './NavItem'

const PrimaryLinks = () => {
  return (
    <>
      {primaryLinks.map((navItem, index) => {
        return (
          <li key={index}>
            <NavItem
              item={navItem.item}
              link={navItem.link}
              icon={navItem.icon}
            />
          </li>
        )
      })}
    </>
  )
}

export default PrimaryLinks
