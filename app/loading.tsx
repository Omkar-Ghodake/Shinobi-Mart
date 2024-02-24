import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-screen h-[88vh] flex justify-center items-center'>
      <div className='relative h-1/2'>
        <Image src={'/shuriken.png'} alt='Loading...' fill />
      </div>
    </div>
  )
}

export default Loading
