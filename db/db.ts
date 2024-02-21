import mongoose from 'mongoose'

let connectionStatus = 0

const connectToMongo = async () => {
  try {
    if (connectionStatus) {
      console.log('Using Existing Connection!')
      return
    }
    const conn = await mongoose.connect(process.env.MONGO_URI || '')
    connectionStatus = conn.connections[0].readyState
    if (connectionStatus) {
      console.log('Connected to Mongo!')
    }
  } catch (error) {
    console.error(error)
  }
}

export default connectToMongo
