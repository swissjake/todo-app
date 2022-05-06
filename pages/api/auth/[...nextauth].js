import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

//import FacebookProvider from "next-auth/providers/facebook";


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
   
    // ...add more providers here
    
  ],
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  

  callbacks: {
    async redirect(url, baseUrl){
      return '/todoPage'
    }
  }
  // providers: [
  //   FacebookProvider({
  //     clientId: process.env.FACEBOOK_CLIENT_ID,
  //     clientSecret: process.env.FACEBOOK_CLIENT_SECRET
  //   })
  // ]
 
})
