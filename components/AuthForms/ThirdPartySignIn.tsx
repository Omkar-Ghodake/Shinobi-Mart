import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { useTheme } from '@/context/ThemeState'

const ThirdPartySignIn = () => {
  const { theme } = useTheme()

  return (
    <div className='flex gap-2'>
      <Button className='w-1/2' variant={'outline'}>
        <Image src={'/google.svg'} alt='Google' height={30} width={30} />
      </Button>

      <Button className='w-1/2' variant={'outline'}>
        <Image
          src={'/github.svg'}
          alt='Github'
          height={30}
          width={30}
          className={`${theme === 'dark' && 'invert'}`}
        />
      </Button>
    </div>
  )
}

export default ThirdPartySignIn
