import { File, IncomingForm } from 'formidable'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'
import { uploadFileToS3 } from '@/utils/upload-file-to-s3'

async function readStream(
  reader: ReadableStreamDefaultReader<Uint8Array>,
): Promise<Uint8Array[]> {
  const chunks: Uint8Array[] = []

  async function readChunk(): Promise<void> {
    return reader
      .read()
      .then(({ done, value }) => {
        if (done) {
          return
        }

        chunks.push(value)

        return readChunk()
      })
      .catch((error: Error) => {
        console.error('Ocorreu um erro ao ler o stream:', error)
      })
  }

  return readChunk().then(() => chunks)
}

export async function POST(req: Request) {
  const url = new URL(req?.url || '')
  const searchParams = new URLSearchParams(url.searchParams)

  const name = searchParams.get('name')

  const formData = await req.formData()

  const formDataFile = formData.get('file') as unknown

  const file = formDataFile as File & {
    arrayBuffer: () => Promise<ArrayBuffer>
  }

  if (!name) {
    return NextResponse.json(
      { message: 'File name is required' },
      { status: 400 },
    )
  }

  // const reader: ReadableStreamDefaultReader<Uint8Array> = req.body.getReader()

  // const streamChunks = await readStream(reader)

  const attachment = await prisma.attachment.create({
    data: {
      name,
    },
  })

  const fileArrayBuffer = await file.arrayBuffer()

  try {
    await uploadFileToS3(Buffer.from(fileArrayBuffer), attachment.id)
  } catch (error) {
    console.log(error)

    await prisma.attachment.delete({
      where: {
        id: attachment.id,
      },
    })

    return NextResponse.json(
      { message: 'An error occurred on upload a file.' },
      { status: 400 },
    )
  }

  return NextResponse.json({ attachment }, { status: 200 })
}
