import { Adapter } from 'next-auth/adapters'

import { createUsername } from '@/utils/create-username'

import { prisma } from '../prisma'

export function PrismaAdapter(): Adapter {
  return {
    async createUser(user) {
      const usersCount = await prisma.user.count()

      const prismaUser = await prisma.user.create({
        data: {
          name: user.name!,
          email: user.email ?? undefined,
          avatarUrl: user.image ?? null,
          username: `${createUsername(user.name!)}${usersCount}`,
        },
      })

      return {
        id: prismaUser.id,
        name: prismaUser.name,
        username: prismaUser.username,
        email: prismaUser.email ?? '',
        emailVerified: null,
        avatarUrl: prismaUser.avatarUrl!,
      }
    },

    async getUser(id) {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      })

      if (!user) {
        return null
      }

      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email!,
        emailVerified: null,
        avatarUrl: user.avatarUrl!,
      }
    },

    async getUserByEmail(email) {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      })

      if (!user) {
        return null
      }

      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email!,
        emailVerified: null,
        avatarUrl: user.avatarUrl!,
      }
    },

    async getUserByAccount({ providerAccountId, provider }) {
      const account = await prisma.account.findUnique({
        where: {
          provider_providerAccountId: {
            provider,
            providerAccountId,
          },
        },
        include: {
          user: true,
        },
      })

      if (!account) {
        return null
      }

      const { user } = account

      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email!,
        emailVerified: null,
        avatarUrl: user.avatarUrl!,
      }
    },

    async updateUser(user) {
      const prismaUser = await prisma.user.update({
        where: {
          id: user.id!,
        },
        data: {
          name: user.name!,
          email: user.email,
          avatarUrl: user.image,
        },
      })

      return {
        id: prismaUser.id,
        name: prismaUser.name,
        username: prismaUser.username,
        email: prismaUser.email!,
        emailVerified: null,
        avatarUrl: prismaUser.avatarUrl!,
      }
    },

    async linkAccount(account) {
      await prisma.account.create({
        data: {
          userId: account.userId,
          type: account.type,
          provider: account.provider,
          providerAccountId: account.providerAccountId,
          refreshToken: account.refresh_token,
          accessToken: account.access_token,
          expiresAt: account.expires_at,
          tokenType: account.token_type,
          scope: account.scope,
          idToken: account.id_token,
          sessionState: account.session_state,
        },
      })
    },

    async createSession({ sessionToken, userId, expires }) {
      await prisma.session.create({
        data: {
          userId,
          expires,
          sessionToken,
        },
      })

      return {
        userId,
        sessionToken,
        expires,
      }
    },

    async getSessionAndUser(sessionToken) {
      const prismaSession = await prisma.session.findUnique({
        where: {
          sessionToken,
        },
        include: {
          user: true,
        },
      })

      if (!prismaSession) {
        return null
      }

      const { user } = prismaSession

      return {
        session: {
          userId: prismaSession.userId,
          expires: prismaSession.expires,
          sessionToken: prismaSession.sessionToken,
        },
        user: {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email!,
          emailVerified: null,
          avatarUrl: user.avatarUrl!,
        },
      }
    },

    async updateSession({ sessionToken, userId, expires }) {
      const session = await prisma.session.update({
        where: {
          sessionToken,
        },
        data: {
          expires,
          userId,
        },
      })

      return {
        userId: session.userId,
        expires: session.expires,
        sessionToken: session.sessionToken,
      }
    },

    async deleteSession(sessionToken) {
      await prisma.session.delete({
        where: {
          sessionToken,
        },
      })
    },
  }
}
