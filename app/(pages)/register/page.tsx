import Form from '@/components/AuthForms/Form'
import FormCard from '@/components/Cards/FormCard'
import FormMaxWidthWrapper from '@/components/FormMaxWidthWrapper'
import MaxHeightWrapper from '@/components/MaxHeightWrapper'
import { registerUser } from '@/server-actions/auth'
import Image from 'next/image'

const Register = () => {
  return (
    <div>
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
                Become a <b className='text-primary'>Leaf Shinobi</b>
              </>
            }
            description={
              <>
                Carry the <b>Will Of Fire!</b>
              </>
            }
          >
            <Form
              handler={registerUser}
              username
              email
              password
              confirmPassword
            />
          </FormCard>
        </FormMaxWidthWrapper>
      </MaxHeightWrapper>
    </div>
  )
}

export default Register
