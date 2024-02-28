import {
  LoginFormSchema,
  RegisterFormSchema,
} from '@/schemas/form-schemas/AuthForms'
import { z } from 'zod'

export type Theme = 'light' | 'dark'

export type ThemeContextType = {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
} | null

export type ServerActionFunctionReturn = {
  success: boolean
  message: string
  data?: any
}

export type LoginServerActionArgs = z.infer<typeof LoginFormSchema>

export type RegisterServerActionArgs = z.infer<typeof RegisterFormSchema>
