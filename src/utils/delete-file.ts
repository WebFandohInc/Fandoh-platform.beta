'use server'

import { deleteFileFromS3 } from './delete-file-from-s3'

export async function deleteFile(key: string) {
  await deleteFileFromS3(key)
}
