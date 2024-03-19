'use server'

import { PutObjectCommand, PutObjectCommandInput } from '@aws-sdk/client-s3'

import { env } from '@/env'
import { makeS3Client } from '@/lib/aws-s3'

export async function uploadFileToS3(buffer: Buffer, key: string) {
  const params: PutObjectCommandInput = {
    Bucket: env.AWS_S3_BUCKET_NAME,
    Key: key,
    Body: buffer,
    ContentType: 'image/jpg image/png',
  }

  const command = new PutObjectCommand(params)

  const s3Client = await makeS3Client()

  try {
    const response = await s3Client.send(command)
    console.log('File upload successfully:', response)

    return response
  } catch (error) {
    console.log(error)
  }
}
