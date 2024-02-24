'use server'

import { AuthFunction, AuthFunctionReturn } from '@/types/functionTypes'

export const registerUser: AuthFunction = async (
  formData: FormData
): Promise<AuthFunctionReturn> => {
  try {
    const formD = Object.fromEntries(formData)
    return { success: true, message: 'Registered Successfully.' }
  } catch (error) {
    throw new Error('Failed to Register!')
  }
}

export const userLogin: AuthFunction = async (
  formData: FormData
): Promise<AuthFunctionReturn> => {
  try {
    const formD = Object.fromEntries(formData)
    return { success: true, message: 'Successfully Logged In.' }
  } catch (error) {
    throw new Error('Failed to Register!')
  }
}
