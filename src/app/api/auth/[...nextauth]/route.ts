'use server'

import type { NextApiRequest, NextApiResponse, NextPageContext } from 'next'
import NextAuth, { NextAuthOptions } from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from 'next-auth/providers/twitter'

import { env } from '@/env'
import { PrismaAdapter } from '@/lib/auth/prisma-adapter'

export async function makeNextAuthOptions(): Promise<NextAuthOptions> {
  return {
    providers: [
      GoogleProvider({
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
        authorization: {
          params: {
            scope:
              'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
            prompt: 'consent',
            access_type: 'offline',
            response_type: 'code',
          },
        },
      }),
      FacebookProvider({
        id: '760524859124056',
        clientId: env.FACEBOOK_CLIENT_ID,
        clientSecret: env.FACEBOOK_CLIENT_SECRET,
        authorization: {
          params: {
            client_id: env.FACEBOOK_CLIENT_ID,
          },
        },
      }),
      TwitterProvider({
        clientId: env.TWITTER_CLIENT_ID,
        clientSecret: env.TWITTER_CLIENT_SECRET,
        // accessTokenUrl: 'https://api.twitter.com/oauth/access_token',
        // requestTokenUrl: 'https://api.twitter.com/oauth/request_token',
        // profileUrl:
        //   'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true',
        // authorization: {
        //   url: 'https://api.twitter.com/oauth/authorize',
        // },
      }),
    ],
    adapter: PrismaAdapter(),
    callbacks: {
      signIn({ account }) {
        if (
          account?.provider === 'google' &&
          (!account?.scope?.includes(
            'https://www.googleapis.com/auth/userinfo.profile',
          ) ||
            !account?.scope?.includes(
              'https://www.googleapis.com/auth/userinfo.email',
            ))
        ) {
          return '/?error=permissions'
        }

        return true
      },
      redirect() {
        return '/'
      },

      session({ session, user }) {
        session.user = user

        return {
          ...user,
          ...session,
        }
      },
    },
  }
}

export async function auth(req: NextApiRequest, res: NextApiResponse) {
  const nextAuthOptions = await makeNextAuthOptions()

  return await NextAuth(req, res, nextAuthOptions)
}

export { auth as GET, auth as POST }
