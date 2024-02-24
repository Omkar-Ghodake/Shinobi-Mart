import React from 'react'
import MaxHeightWrapper from '../MaxHeightWrapper'
import Image from 'next/image'
import naruto_jiraya_minato_kakashi from '@/public/naruto_jiraya_minato_kakashi.jpg'

const FormPageBg = () => {
  return (
    <MaxHeightWrapper className='absolute flex justify-center items-center -z-50'>
      <div className='relative w-full h-full inset-0'>
        <Image
          src={naruto_jiraya_minato_kakashi}
          alt=''
          fill
          objectFit='cover'
          className='opacity-30 absolute inset-0'
          placeholder='blur'
          priority
        />
      </div>
    </MaxHeightWrapper>
  )
}

export default FormPageBg
