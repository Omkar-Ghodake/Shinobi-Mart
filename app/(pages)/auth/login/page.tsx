import LoginForm from '@/components/AuthForms/LoginForm'
import FormPageBg from '@/components/Backgrounds/FormPageBg'
import FormCard from '@/components/Cards/FormCard'
import FormMaxWidthWrapper from '@/components/FormMaxWidthWrapper'
import MaxHeightWrapper from '@/components/MaxHeightWrapper'

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
            <LoginForm />
          </FormCard>
        </FormMaxWidthWrapper>
      </MaxHeightWrapper>
    </>
  )
}

export default Login
