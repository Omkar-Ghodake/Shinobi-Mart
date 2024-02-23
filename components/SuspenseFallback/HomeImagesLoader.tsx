import Image from 'next/image'
import React from 'react'

const HomeImagesLoader = () => {
  return (
    <div className='absolute w-screen h-screen inset-0 flex justify-center items-center'>
      <div className='relative h-1/2 w-1/2'>
        <Image src={'https://tenor.com/bAfVO.gif'} alt='Loading...' fill />
      </div>
    </div>
  )
}

export default HomeImagesLoader
