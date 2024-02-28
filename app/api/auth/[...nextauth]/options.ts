import { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const options: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: '',
      profile(profiles) {
        console.log('🚀 ~ profile ~ profile:', profile)

        let userRole = 'Google User'

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        }
      },
    }),
  ],
}

export default options
