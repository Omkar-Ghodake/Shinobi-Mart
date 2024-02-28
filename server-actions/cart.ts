'use server'

import connectToMongo from '@/db/db'
import { Cart } from '@/schemas/models/Cart'
import { ServerActionFunction } from '@/types/functionTypes'

export const createCart: ServerActionFunction = async () => {
  try {
    connectToMongo()

    const cart = await Cart.create({ products: [] })

    console.log('🚀 ~ constcreateCart:ServerActionFunction= ~ cart:', cart)

    if (!cart) return { success: false, message: 'Failed to create cart.' }

    return { success: true, message: 'Cart created successfully.', data: cart }
  } catch (error) {
    return { success: false, message: 'Internal Server Error Occured.' }
  }
}
