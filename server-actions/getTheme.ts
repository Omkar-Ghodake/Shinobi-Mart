import { User } from '@/models/User'
import { ObjectId } from 'mongoose'

const getTheme = async (id: ObjectId) => {
  const user = await User.findById(id)
  if (user) {
    return { success: true, userTheme: user.appTheme }
  } else {
    return { success: false, error: 'User not found.' }
  }
}

export default getTheme
