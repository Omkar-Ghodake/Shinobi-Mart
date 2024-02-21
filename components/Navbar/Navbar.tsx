import React from 'react'
import NavList from './NavList'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-center gap-40 items-center px-10 py-3 border-b-2 text-lg h-[12vh] sm:w-[100vw]'>
      <Link href={'/'} className='navbar-brand flex items-center gap-6'>
        <Image
          src={'/navbar-brand.png'}
          alt='SHINOBI'
          width={65}
          height={65}
          className=''
        />
        <h1 className='text-2xl font-semibold uppercase tracking-wider'>
          <p>Shinobi</p>
          <p>Mart</p>
        </h1>
      </Link>

      <div className='nav-list-container'>
        <NavList />
      </div>
    </nav>
  )
}

export default Navbar
