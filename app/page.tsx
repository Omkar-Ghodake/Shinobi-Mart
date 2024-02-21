import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { ArrowDownRightFromCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  // connectToMongo()
  return (
    <>
      <main className='relative flex gap-1 bg-primary/95'>
        <div className='h-[88vh] w-1/3 flex flex-col gap-1'>
          <div className='relative h-[40%]'>
            <Image src={'/landing-page-images/gaara.jpg'} alt='Gaara' fill />
          </div>
          <div className='relative h-[60%]'>
            <Image src={'/landing-page-images/pain.jpg'} alt='Gaara' fill />
          </div>
        </div>

        <div className='h-[88vh] w-1/3 flex flex-col gap-1'>
          <div className='relative h-[50%]'>
            <Image src={'/landing-page-images/naruto.jpg'} alt='Gaara' fill />
          </div>
          <div className='relative h-[50%]'>
            <Image src={'/landing-page-images/hinata.jpg'} alt='Gaara' fill />
          </div>
        </div>

        <div className='h-[88vh] w-1/3 flex flex-col gap-1'>
          <div className='relative h-[60%]'>
            <Image src={'/landing-page-images/kakashi.jpg'} alt='Gaara' fill />
          </div>
          <div className='relative h-[40%]'>
            <Image src={'/landing-page-images/itachi.jpg'} alt='Gaara' fill />
          </div>
        </div>

        <Button
          variant={'default'}
          size={'lg'}
          className='absolute flex justify-center items-center gap-2 font-semibold bottom-10 left-1/2 -translate-x-1/2 text-xl uppercase'
          asChild
        >
          <Link href={'/products'}>
            <span>See Products</span>
            <ArrowDownRightFromCircle className='-rotate-45' />
          </Link>
        </Button>
      </main>

      <MaxWidthWrapper>
        <div></div>
      </MaxWidthWrapper>
    </>
  )
}
