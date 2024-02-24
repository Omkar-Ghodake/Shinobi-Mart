import Form from '@/components/AuthForms/Form'
import FormPageBg from '@/components/AuthForms/FormPageBg'
import FormCard from '@/components/Cards/FormCard'
import FormMaxWidthWrapper from '@/components/FormMaxWidthWrapper'
import MaxHeightWrapper from '@/components/MaxHeightWrapper'
import { userLogin } from '@/server-actions/auth'

const Login = () => {
  return (
    <>
      <MaxHeightWrapper className='relative flex justify-center items-center'>
        <FormPageBg />

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
    </>
  )
}

export default Login
