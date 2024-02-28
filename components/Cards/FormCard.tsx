import { ReactElement, ReactNode } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'

const FormCard = ({
  title,
  description,
  children,
}: {
  title: ReactElement
  description: ReactElement
  children: ReactNode
}) => {
  return (
    <Card>
      <CardHeader className='pb-2'>
        <CardTitle>{title}</CardTitle>

        <CardDescription className='card-desc'>{description}</CardDescription>
      </CardHeader>

      <CardContent className='flex justify-center items-center pb-2'>
        <div className='w-full flex flex-col items-center justify-center gap-5'>
          <div className='w-2/3 flex flex-col gap-2'>{children}</div>
        </div>
      </CardContent>

      <CardFooter></CardFooter>
    </Card>
  )
}

export default FormCard
