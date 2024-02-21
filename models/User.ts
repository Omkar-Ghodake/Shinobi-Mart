import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  address: {
    house: {
      type: String,
      required: true,
    },
    lane: {
      type: String,
      required: true,
    },
    landmark: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart',
  },
  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Wishlist',
    },
  ],
  appTheme: {
    type: String,
    default: 'light',
  },
})

export const User = mongoose.models.User || mongoose.model('User', UserSchema)
