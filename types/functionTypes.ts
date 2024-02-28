import {
  LoginServerActionArgs,
  RegisterServerActionArgs,
  ServerActionFunctionReturn,
} from './dataTypes'

export type ServerActionFunction = () => Promise<ServerActionFunctionReturn>

export type LoginServerAction = (
  values: LoginServerActionArgs
) => Promise<ServerActionFunctionReturn>

export type RegisterServerAction = (
  values: RegisterServerActionArgs
) => Promise<ServerActionFunctionReturn>

export type OnSubmitLogin = (values: LoginServerActionArgs) => void

export type OnSubmitRegister = (values: RegisterServerActionArgs) => void
