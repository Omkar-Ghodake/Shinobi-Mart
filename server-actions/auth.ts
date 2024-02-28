'use server'

import {
  LoginFormSchema,
  RegisterFormSchema,
} from '@/schemas/form-schemas/AuthForms'
import { User } from '@/schemas/models/User'
import { LoginServerAction, RegisterServerAction } from '@/types/functionTypes'
import { createCart } from './cart'
import connectToMongo from '@/db/db'
import CryptoJs from 'crypto-js'

export const registerUser: RegisterServerAction = async (values) => {
  try {
    connectToMongo()

    const validatedFields = RegisterFormSchema.safeParse(values)

    if (!validatedFields.success)
      return { success: false, message: 'Invalid fields.' }

    const { name, email, password, confirmPassword } = validatedFields.data

    let existingUser = await User.findOne({ email })

    if (existingUser)
      return { success: false, message: 'Email already in use.' }

    if (password !== confirmPassword)
      return { success: false, message: 'Passwords do not match.' }

    const hashedPassword = CryptoJs.AES.encrypt(
      password,
      process.env.CRYPTOJS_SECRET as string
    ).toString()

    const cart = await createCart()

    await User.create({
      name,
      email,
      password: hashedPassword,
      cart: cart.data._id,
    })

    return { success: true, message: 'Successfully Registered.' }
  } catch (error) {
    console.log(error)
    return { success: false, message: 'An Internal Server Error Occured.' }
  }
}

export const userLogin: LoginServerAction = async (values) => {
  try {
    connectToMongo()

    const validatedFields = LoginFormSchema.safeParse(values)

    if (!validatedFields.success)
      return { success: false, message: 'Invalid Fields.' }

    return { success: true, message: 'Successfully Logged In.' }
  } catch (error) {
    console.log(error)
    return { success: false, message: 'An Internal Server Error Occured.' }
    throw new Error('Failed to Register!')
  }
}
