import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

type Google = {
  clientId: string | undefined,
  clientSecret: string | undefined
}
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // GoogleProvider<Google>({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    // ...add more providers here
  ],
})
