import mongoose from 'mongoose'

let connectionStatus = 0
const mongoUri: string = process.env.MONGO_URI || ''

const connectToMongo = async () => {
  try {
    if (connectionStatus) {
      console.log('Using Existing Connection!')
      return
    }
    const conn = await mongoose.connect(mongoUri)
    connectionStatus = conn.connections[0].readyState
    if (connectionStatus) {
      console.log('Connected to Mongo!')
    }
  } catch (error) {
    console.error(error)
  }
}

export default connectToMongo
