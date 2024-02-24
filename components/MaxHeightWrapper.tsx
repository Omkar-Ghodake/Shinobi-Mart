import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const MaxHeightWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return <div className={cn('w-screen h-[88vh]', className)}>{children}</div>
}

export default MaxHeightWrapper
