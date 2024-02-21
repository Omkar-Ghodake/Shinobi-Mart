import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    length: {
      minlength: 3,
      maxlength: 350,
    },
  },
  desc: {
    type: String,
    required: true,
    length: {
      minlength: 15,
      maxlength: 600,
    },
  },
  price: {
    magnitude: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
  },
  colors: [
    {
      name: String,
      value: String,
    },
  ],
  stock: {
    type: Number,
    required: true,
  },
  category: [
    {
      type: String,
      required: true,
    },
  ],
  ratings: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      rating: {
        type: Number,
      },
    },
  ],
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      review: {
        type: String,
        length: {
          minlength: 3,
          maxlength: 600,
        },
      },
    },
  ],
})

export const Product =
  mongoose.models.Product || mongoose.model('Product', ProductSchema)
