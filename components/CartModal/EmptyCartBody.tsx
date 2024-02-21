import Image from 'next/image'
import React from 'react'

const EmptyCartBody = () => {
  return (
    <div className='h-full w-full flex flex-col items-center mt-16'>
      <div className='relative w-1/2 h-1/2 flex items-center'>
        <Image src={'/empty-cart.png'} alt='Empty Cart' fill />
      </div>

      <p className='font-semibold text-4xl text-destructive'>EMPTY CART!</p>

      <p className='font-medium text-xl text-secondary-foreground'>
        Add items to Cart to Checkout.
      </p>
    </div>
  )
}

export default EmptyCartBody
