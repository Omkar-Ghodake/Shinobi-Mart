export type AuthFunctionReturn = {
  success: boolean
  message: string
}

export type AuthFunction = (formData: FormData) => Promise<AuthFunctionReturn>
