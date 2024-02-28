import z from 'zod'

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  // .min(8, { message: 'Password must be at least 8 characters.' }),
})

export const RegisterFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name should contain at least 3 characters' })
    .max(30, {
      message: 'Name should not contain more than 30 characters',
    }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password should contain at least 8 characters' })
    .max(20, {
      message: 'Password should not contain more than 20 characters',
    }),
  confirmPassword: z.string(),
})
