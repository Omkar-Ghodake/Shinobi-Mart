import { ReactNode } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { cn } from '@/lib/utils'

const FormMaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <MaxWidthWrapper>
      <div className={cn('w-1/2 mx-auto shadow-2xl', className)}>
        {children}
      </div>
    </MaxWidthWrapper>
  )
}

export default FormMaxWidthWrapper
