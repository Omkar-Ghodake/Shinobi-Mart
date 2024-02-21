import { MoveRight, Trash } from 'lucide-react'
import EmptyCartBody from '../CartModal/EmptyCartBody'
import ProductsCartBody from '../CartModal/ProductsCartBody'
import { Button } from '../ui/button'
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet'

const ModalSheetContent = () => {
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
    <SheetContent className='sm:max-w-none w-5/12 h-full flex flex-col justify'>
      <div className='flex flex-col flex-1'>
        <SheetHeader>
          <SheetTitle className='text-xl'>Shinobi Cart</SheetTitle>

          <SheetDescription className='text-lg'>
            Your Shopping Cart
          </SheetDescription>
        </SheetHeader>

        {cartProducts.length > 0 ? (
          <div>
            <ProductsCartBody />
          </div>
        ) : (
          <div className='h-full w-full flex flex-col gap-5 items-center'>
            <EmptyCartBody />
          </div>
        )}
      </div>

      <SheetFooter>
        <SheetClose asChild>
          <Button variant={'default'} className=''>
            Proceed to Checkout
            <MoveRight className='ml-2' />
          </Button>
        </SheetClose>

        <Button variant={'destructive'}>
          Clear Cart
          <Trash className='ml-2' />
        </Button>
      </SheetFooter>
    </SheetContent>
  )
}

export default ModalSheetContent
