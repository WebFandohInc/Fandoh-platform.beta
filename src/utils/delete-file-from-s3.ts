'use server'

import { DeleteObjectCommand } from '@aws-sdk/client-s3'

import { env } from '@/env'
import { makeS3Client } from '@/lib/aws-s3'

export async function deleteFileFromS3(key: string) {
  const command = new DeleteObjectCommand({
    Bucket: env.AWS_S3_BUCKET_NAME,
    Key: key,
  })

  const s3Client = await makeS3Client()

  try {
    const response = await s3Client.send(command)

    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
