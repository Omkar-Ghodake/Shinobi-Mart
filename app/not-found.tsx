import MaxHeightWrapper from '@/components/MaxHeightWrapper'
import { MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <MaxHeightWrapper className='flex justify-center'>
      <div className='flex flex-col justify-center items-center'>
        <div className='relative'>
          <Image
            src={'/minato_with_kunai.png'}
            alt='Minato Namikaze'
            height={200}
            width={200}
          />

          <div className='absolute -top-24 -right-44'>
            <div className='relative'>
              <MessageCircle className='' size={200} strokeWidth={0.3} />
              <h2 className='absolute top-14 right-12 text-xl w-1/2 font-medium text-center'>
                You&apos;re Lost Buddy!
              </h2>
            </div>
          </div>
        </div>

        <h3 className='text-2xl'>Use My Kunai to Teleport.</h3>

        <Link href={'/'} className='rotate-90 cursor-pointer'>
          <Image
            src={'/minato_kunai.png'}
            alt='Kunai'
            width={70}
            height={30}
            className='hover:scale-110 duration-300 ease-in-out'
          />
        </Link>
      </div>
    </MaxHeightWrapper>
  )
}

export default NotFound
