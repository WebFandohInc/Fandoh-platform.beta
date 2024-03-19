import { publicEnv } from '@/env/public'

export async function getFileCloudFrontUrl(key: string) {
  const url = `${publicEnv.NEXT_PUBLIC_AWS_CLOUDFRONT_URL}/${key}`

  return url
}
