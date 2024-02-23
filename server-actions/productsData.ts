'use server'
import connectToMongo from '@/db/db'
import { Product } from '@/models/Product'

export const getAllProducts = async () => {
  await connectToMongo()

  try {
    const allProducts = await Product.find({})
    if (allProducts.length > 0) {
      return { success: true, products: allProducts }
    } else {
      return { success: false, error: 'No Products Found.' }
    }
  } catch (error) {
    throw new Error('Unable to get Products.')
  }
}
