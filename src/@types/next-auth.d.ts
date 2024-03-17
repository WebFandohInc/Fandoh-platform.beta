import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    name: string
    email: string
    username: string
    profilePhotoUrl: string
  }

  interface Session {
    user: User
  }
}
