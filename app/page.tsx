import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { ArrowDownRightFromCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import gaara from '@/public/landing-page-images/gaara.jpg'
import pain from '@/public/landing-page-images/pain.jpg'
import naruto from '@/public/landing-page-images/naruto.jpg'
import hinata from '@/public/landing-page-images/hinata.jpg'
import kakashi from '@/public/landing-page-images/kakashi.jpg'
import itachi from '@/public/landing-page-images/itachi.jpg'

export default function Home() {
  // connectToMongo()
  return (
    <>
      <main className='relative flex'>
        <div className='h-[88vh] w-1/3 flex flex-col'>
          <div className='relative h-[40%]'>
            <Image src={gaara} alt='Gaara' fill priority placeholder='blur' />
          </div>
          <div className='relative h-[60%]'>
            <Image src={pain} alt='Pain' fill priority placeholder='blur' />
          </div>
        </div>

        <div className='h-[88vh] w-1/3 flex flex-col'>
          <div className='relative h-[50%]'>
            <Image src={naruto} alt='Naruto' fill priority placeholder='blur' />
          </div>
          <div className='relative h-[50%]'>
            <Image src={hinata} alt='Hinata' fill priority placeholder='blur' />
          </div>
        </div>

        <div className='h-[88vh] w-1/3 flex flex-col'>
          <div className='relative h-[60%]'>
            <Image
              src={kakashi}
              alt='Kakashi'
              fill
              priority
              placeholder='blur'
            />
          </div>
          <div className='relative h-[40%]'>
            <Image src={itachi} alt='Itachi' fill priority placeholder='blur' />
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
