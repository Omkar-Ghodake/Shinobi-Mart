import Form from '@/components/AuthForms/Form'
import FormCard from '@/components/Cards/FormCard'
import FormMaxWidthWrapper from '@/components/FormMaxWidthWrapper'
import MaxHeightWrapper from '@/components/MaxHeightWrapper'
import { userLogin } from '@/server-actions/auth'
import Image from 'next/image'

const Login = () => {
  return (
    <MaxHeightWrapper className='relative flex justify-center items-center'>
      <Image
        src={'/naruto_jiraya_minato_kakashi.jpg'}
        alt=''
        fill
        objectFit='cover'
        className='opacity-30 absolute inset-0 -z-50'
      />

      <FormMaxWidthWrapper>
        <FormCard
          title={
            <>
              Welcome <b className='text-primary'>Leaf Shinobi</b>
            </>
          }
          description={
            <>
              Start <b>Your Mission Now!</b>
            </>
          }
        >
          <Form handler={userLogin} email password />
        </FormCard>
      </FormMaxWidthWrapper>
    </MaxHeightWrapper>
  )
}

export default Login
