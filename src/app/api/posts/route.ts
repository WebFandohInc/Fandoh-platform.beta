import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const userId = searchParams.get('userId')

  console.log(userId, 'USER ID')

  const posts = await prisma.post.findMany({
    include: {},
    where: userId
      ? {
          authorId: userId,
        }
      : undefined,
  })

  return NextResponse.json({ posts }, { status: 200 })
}
