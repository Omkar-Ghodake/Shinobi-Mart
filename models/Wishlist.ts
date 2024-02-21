import mongoose from 'mongoose'

const WishlistSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
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

export const Wishlist =
  mongoose.models.Wishlist || mongoose.model('Wishlist', WishlistSchema)
