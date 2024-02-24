import { AuthForm } from '@/types/propTypes'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const Form = ({
  handler,
  username,
  email,
  password,
  confirmPassword,
}: AuthForm) => {
  return (
    <form
      className='w-2/3 flex flex-col justify-center items-center gap-5'
      action={handler}
    >
      {username && (
        <div className='form-group w-full'>
          <Label htmlFor=''>Username</Label>
          <Input
            type='text'
            name='username'
            minLength={3}
            maxLength={30}
            required
          />
        </div>
      )}

      {email && (
        <div className='form-group w-full'>
          <Label htmlFor=''>Email</Label>
          <Input type='email' name='email' required />
        </div>
      )}

      {password && (
        <div className='form-group w-full'>
          <Label htmlFor=''>Password</Label>
          <Input
            type='password'
            name='password'
            minLength={8}
            maxLength={20}
            required
          />
        </div>
      )}

      {confirmPassword && (
        <div className='form-group w-full'>
          <Label htmlFor=''>Confirm Password</Label>
          <Input type='password' name='confirmPassword' required />
        </div>
      )}

      <Button className='w-full' role='submit'>
        SUBMIT
      </Button>
    </form>
  )
}

export default Form
