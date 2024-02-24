import { AuthFunction } from './functionTypes'

export type AuthForm = {
  handler: AuthFunction
  username?: boolean
  email?: boolean
  password?: boolean
  confirmPassword?: boolean
}
