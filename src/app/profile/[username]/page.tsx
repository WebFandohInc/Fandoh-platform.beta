import { User } from '@prisma/client'
import { BookMarked } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getServerSession, Session } from 'next-auth'

import { makeNextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { PostCard } from '@/components/post-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import { EditProfile } from './components/edit-profile'
import { Followers } from './components/followers'
import { Following } from './components/following'

interface ProfileProps {
  params: {
    username: string
  }
}

class ErrorClass extends Error {
  public type = 'internal-server-error'

  constructor({ message, type }: { message: string; type: string }) {
    super(message)
    this.message = message
    this.type = type
  }
}

async function getProfile(params: { username: string }) {
  try {
    const userResponse = await fetch(
      `http://localhost:3000/api/users/${params.username}`,
      {
        next: { tags: ['profile', params.username] },
      },
    )

    if (!userResponse.ok) {
      const errorResponse = await userResponse.json()

      throw new ErrorClass({
        message: errorResponse.message,
        type: errorResponse.type,
      })
    }

    const userResponseData = await userResponse.json()

    return userResponseData
  } catch (error) {
    if (error instanceof ErrorClass) {
      return {
        isError: true,
        error: {
          message: error.message,
          type: error.type,
        },
      }
    }
  }
}

async function getUserPosts(params: { userId: string }) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/posts?userId=${params.userId}`,
    )

    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}

export default async function Profile({ params }: ProfileProps) {
  const authOptions = await makeNextAuthOptions()

  const session = await getServerSession(authOptions)

  const profile: {
    user: User
    isError?: boolean
    error?: { type: string }
  } = await getProfile(params)

  if (profile?.isError && profile?.error?.type === 'not-found') {
    return notFound()
  }

  if (profile?.isError || !profile) {
    throw new Error('aoisdjasdjoaisjdioasj')
  }

  const userPosts = await getUserPosts({ userId: profile.user.id })

  return (
    <div className="mx-2 min-h-screen max-w-[1180px] pb-10 pt-28 xl:m-auto">
      <div className="h-[120px] rounded-2xl bg-[#2F5F83]"></div>

      <div className="mt-3 flex justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="size-[130px] border-2 border-[#2F5F83]">
            {profile.user.avatarUrl && (
              <AvatarImage src={profile.user.avatarUrl} />
            )}
            <AvatarFallback className="text-5xl font-extrabold text-muted-foreground">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h2 className="text-3xl font-extrabold text-muted-foreground">
              {profile.user.name}
            </h2>

            <span className="text-muted-foreground">
              @{profile.user.username}
            </span>

            <div className="flex items-center gap-2 text-zinc-600">
              <Followers />

              <Following />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start max-[600px]:hidden">
          {session?.user.id !== profile.user.id && (
            <Button
              size="sm"
              variant="outline"
              className="w-[120px] rounded-xl font-extrabold shadow-[0px_1px_1px_1px] shadow-zinc-300"
            >
              Follow
            </Button>
          )}

          {session?.user.id === profile.user.id && (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-[120px] rounded-xl font-extrabold shadow-[0px_1px_1px_1px] shadow-zinc-300"
                >
                  Edit profile
                </Button>
              </DialogTrigger>

              <EditProfile user={profile.user} />
            </Dialog>
          )}
        </div>
      </div>

      <p className="mt-8 w-full text-muted-foreground md:size-1/2">
        {profile.user.bio}
      </p>

      <div className="mt-6 flex w-full items-center gap-2 self-start min-[600px]:hidden">
        <Button
          size="sm"
          variant="outline"
          className="flex-1 rounded-xl font-extrabold shadow-[0px_1px_1px_1px] shadow-zinc-300"
        >
          Follow
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="flex-1 rounded-xl font-extrabold shadow-[0px_1px_1px_1px] shadow-zinc-300"
        >
          Edit profile
        </Button>
      </div>

      <p className="mt-8 flex w-min items-center gap-1 rounded-full border-DEFAULT border-zinc-300 p-2 font-medium text-zinc-600">
        <BookMarked className="size-5" />
        <span className="font-extrabold">20</span> Posts
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  )
}
