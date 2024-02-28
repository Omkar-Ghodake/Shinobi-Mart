'use client'

import { RegisterFormSchema } from '@/schemas/form-schemas/AuthForms'
import { registerUser } from '@/server-actions/auth'
import { OnSubmitRegister } from '@/types/functionTypes'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
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
import Link from 'next/link'

const RegisterForm = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [isPending, startTransition] = useTransition()

  const registrationForm = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit: OnSubmitRegister = (values) => {
    setSuccess('')
    setError('')

    startTransition(() => {
      registerUser(values).then((res) => {
        res.success ? setSuccess(res.message) : setError(res.message)
      })
    })
  }

  return (
    <>
      <Form {...registrationForm}>
        <form
          onSubmit={registrationForm.handleSubmit(onSubmit)}
          className='flex flex-col gap-2'
        >
          <FormField
            control={registrationForm.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>

                <FormControl>
                  <Input
                    {...field}
                    type='text'
                    placeholder='John Doe'
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
            control={registrationForm.control}
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
            control={registrationForm.control}
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

          <FormField
            control={registrationForm.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>

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

          <Button type='submit' className='w-full' disabled={isPending}>
            REGISTER
          </Button>
        </form>
      </Form>

      <FormError message={error} />
      <FormSuccess message={success} />

      <ThirdPartySignIn />

      <p>
        Already a Leaf Shinobi?{' '}
        <Link href={'/auth/login'}>
          <b className='text-primary underline'>Start Mission Here.</b>
        </Link>
      </p>
    </>
  )
}

export default RegisterForm
