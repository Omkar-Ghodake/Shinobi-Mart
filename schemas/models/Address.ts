import mongoose from 'mongoose'

const AddressSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
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
})

export const Address =
  mongoose.models.Address || mongoose.model('Address', AddressSchema)
