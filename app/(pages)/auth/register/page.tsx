import RegisterForm from '@/components/AuthForms/RegisterForm'
import FormPageBg from '@/components/Backgrounds/FormPageBg'
import FormCard from '@/components/Cards/FormCard'
import FormMaxWidthWrapper from '@/components/FormMaxWidthWrapper'
import MaxHeightWrapper from '@/components/MaxHeightWrapper'

const Register = () => {
  return (
    <div>
      <MaxHeightWrapper className='relative flex justify-center items-center'>
        <FormPageBg />

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
            <RegisterForm />
          </FormCard>
        </FormMaxWidthWrapper>
      </MaxHeightWrapper>
    </div>
  )
}

export default Register
