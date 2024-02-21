import React from 'react'
import { Button } from '../ui/button'
import { Minus, Plus } from 'lucide-react'
import { Separator } from '../ui/separator'

const ProductsCartBody = () => {
  const cartProducts = [
    {
      title: 'Product 1',
      price: 200,
    },
    {
      title: 'Product 2',
      price: 500,
    },
    {
      title: 'Product 3',
      price: 300,
    },
  ]

  return (
    <div className='mt-10 flex flex-col gap-7'>
      {cartProducts.map((product, index) => {
        return (
          <div key={index} className='flex items-center text-lg'>
            <div className='font-medium w-1/2'>{product.title}</div>
            <div className='flex justify-between items-center w-1/2 gap-5 text-center'>
              <Button variant={'outline'}>
                <Minus />
              </Button>
              {product.price}
              <Button variant={'outline'}>
                <Plus />
              </Button>
            </div>
          </div>
        )
      })}

      <Separator />

      <div className='flex items-center text-lg'>
        <div className='font-medium w-1/2'>Total</div>
        <div className='font-medium w-1/2 text-center'>1000</div>
      </div>
    </div>
  )
}

export default ProductsCartBody
