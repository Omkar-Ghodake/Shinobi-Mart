'use client'

import { LoginFormSchema } from '@/schemas/form-schemas/AuthForms'
import { userLogin } from '@/server-actions/auth'
import { OnSubmitLogin } from '@/types/functionTypes'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import FormError from './FormError'
import FormSuccess from './FormSuccess'
import ThirdPartySignIn from './ThirdPartySignIn'
import { LoginServerActionArgs } from '@/types/dataTypes'
import Link from 'next/link'

const LoginForm = () => {
  const [isPending, startTransition] = useTransition()

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const loginForm = useForm<LoginServerActionArgs>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: OnSubmitLogin = (values) => {
    setSuccess('')
    setError('')

    startTransition(() => {
      userLogin(values).then((res) => {
        res.success ? setSuccess(res.message) : setError(res.message)
      })
    })
  }
  return (
    <>
      <Form {...loginForm}>
        <form
          onSubmit={loginForm.handleSubmit(onSubmit)}
          className='flex flex-col gap-2'
        >
          <FormField
            control={loginForm.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>

                <FormControl>
                  <Input
                    {...field}
                    type='text'
                    placeholder='john.doe@example.com'
                    required
                    disabled={isPending}
                  />
                </FormControl>

                <FormDescription></FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={loginForm.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>

                <FormControl>
                  <Input
                    {...field}
                    type='password'
                    placeholder='********'
                    required
                    disabled={isPending}
                  />
                </FormControl>

                <FormDescription></FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormError message={error} />
          <FormSuccess message={success} />

          <Button type='submit' className='w-full' disabled={isPending}>
            LOGIN
          </Button>
        </form>
      </Form>

      <ThirdPartySignIn />

      <p>
        Not a Leaf Shinobi?{' '}
        <Link href={'/auth/register'}>
          <b className='text-primary underline'>Register Here.</b>
        </Link>
      </p>

      {/* <form
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
            autoComplete='username'
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
            autoComplete='new-password'
            required
          />
        </div>
      )}

      {confirmPassword && (
        <div className='form-group w-full'>
          <Label htmlFor=''>Confirm Password</Label>
          <Input
            type='password'
            name='confirmPassword'
            minLength={8}
            maxLength={20}
            autoComplete='new-password'
            required
          />
        </div>
      )}

      <Button className='w-full' role='submit'>
        SUBMIT
      </Button>
    </form> */}
    </>
  )
}

export default LoginForm
