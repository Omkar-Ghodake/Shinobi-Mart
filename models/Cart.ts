import mongoose from 'mongoose'

const CartSchema = new mongoose.Schema({
  products: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        default: 0,
      },
    },
  ],
})

export const Cart = mongoose.models.Cart || mongoose.model('Cart', CartSchema)
