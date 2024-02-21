import {
  BookHeart,
  Moon,
  Shield,
  ShieldHalf,
  ShoppingCart,
  Sun,
  User,
} from 'lucide-react'
import React, { ReactElement } from 'react'

type DefaultNavLinks = {
  item: string
  link: string
  icon?: ReactElement
  label?: string
  isNotLink?: boolean
}

interface ControlPanelNavLinks {
  [key: string]: {
    item: string
    link: string
    icon?: ReactElement
    label?: string
    isNotLink?: boolean
  }
}

const primaryLinks: DefaultNavLinks[] = [
  {
    item: 'Home',
    link: '/',
  },
  {
    item: 'Products',
    link: '/products',
  },
  {
    item: 'Categories',
    link: '/categories',
  },
]

const defaultLinks: DefaultNavLinks[] = [
  {
    item: 'Wishlists',
    link: '/wishlist',
    icon: React.createElement(BookHeart),
  },
  {
    item: 'Cart',
    link: '#',
    icon: React.createElement(ShoppingCart),
    isNotLink: true,
  },
  {
    item: 'Light Mode',
    link: '#',
    icon: React.createElement(Sun),
    isNotLink: true,
  },
  {
    item: 'Dark Mode',
    link: '#',
    icon: React.createElement(Moon),
    isNotLink: true,
  },
]

const secondaryLinks: DefaultNavLinks[] = [
  {
    item: 'Login',
    link: '/login',
  },
  {
    item: 'Register',
    link: '/register',
  },
]

const controlPanelLinks: ControlPanelNavLinks = {
  customer: {
    item: 'Profile',
    link: '/user-profile',
    icon: React.createElement(User),
    label: 'Profile',
  },
  staff: {
    item: 'Staff',
    link: '/dashboard/staff',
    icon: React.createElement(ShieldHalf),
    label: 'Staff',
  },
  admin: {
    item: 'Admin',
    link: '/dashboard/admin',
    icon: React.createElement(Shield),
    label: 'Admin',
  },
}

export { primaryLinks, defaultLinks, secondaryLinks, controlPanelLinks }
