import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function GET(
  req: NextRequest,
  route: { params: { username: string } },
) {
  const username = route.params.username

  if (!username) {
    return NextResponse.json(
      { message: 'Username is required' },
      { status: 400 },
    )
  }

  const user = await prisma.user.findUnique({
    include: {},
    where: {
      username,
    },
  })

  if (!user) {
    return NextResponse.json(
      { message: 'User not found', type: 'not-found' },
      { status: 400 },
    )
  }

  return NextResponse.json({ user }, { status: 200 })
}
