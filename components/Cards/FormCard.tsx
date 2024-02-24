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
      <CardHeader>
        <CardTitle>{title}</CardTitle>

        <CardDescription className='card-desc'>{description}</CardDescription>
      </CardHeader>

      <CardContent className='flex justify-center items-center'>
        {children}
      </CardContent>

      <CardFooter></CardFooter>
    </Card>
  )
}

export default FormCard
