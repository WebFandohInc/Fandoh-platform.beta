import { NextResponse } from 'next/server'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'
import { getFileCloudFrontUrl } from '@/utils/get-file-cloud-front-url'

const changeUserAvatarBodySchema = z.object({
  avatarId: z.string(),
})

export async function PATCH(
  req: Request,
  route: { params: { userId: string } },
) {
  const body = changeUserAvatarBodySchema.safeParse(await req.json())

  if (!body.success) {
    return NextResponse.json(
      { message: 'Invalid or missing fields' },
      { status: 400 },
    )
  }

  const { avatarId } = body.data

  const user = await prisma.user.findUnique({
    include: {
      avatar: true,
    },
    where: {
      id: route.params.userId,
    },
  })

  if (!user) {
    return NextResponse.json({ message: 'User not found.' }, { status: 400 })
  }

  const userHasAvatar = user.avatarId

  if (userHasAvatar) {
    await prisma.attachment.delete({
      where: {
        id: user.avatarId!,
      },
    })
  }

  const avatarUrl = await getFileCloudFrontUrl(avatarId)

  await prisma.user.update({
    data: {
      avatarUrl,
    },
    where: {
      id: route.params.userId,
    },
  })

  return NextResponse.json({ status: 204 })
}
