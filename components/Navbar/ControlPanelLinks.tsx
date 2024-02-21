import React from 'react'
import NavItem from './NavItem'
import { controlPanelLinks } from '@/lib/data/navbar-links'

type User = {
  username?: string
  role?: string
}

const ControlPanelLinks = ({ user }: { user: User }) => {
  return (
    <>
      {user.role && (
        <>
          <li>
            <NavItem
              item={controlPanelLinks.customer.item}
              link={controlPanelLinks.customer.link}
              icon={controlPanelLinks.customer.icon}
              label={controlPanelLinks.customer.label}
            />
          </li>

          {(user.role === 'admin' || user.role === 'staff') && (
            <li>
              <NavItem
                item={controlPanelLinks[user.role]?.item}
                link={controlPanelLinks[user.role]?.link}
                icon={controlPanelLinks[user.role]?.icon}
                label={controlPanelLinks[user.role]?.label}
              />
            </li>
          )}
        </>
      )}
    </>
  )
}

export default ControlPanelLinks
