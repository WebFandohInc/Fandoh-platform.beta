import { z } from 'zod'

const envSchema = z.object({
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  FACEBOOK_CLIENT_ID: z.string(),
  FACEBOOK_CLIENT_SECRET: z.string(),
  TWITTER_CLIENT_ID: z.string(),
  TWITTER_CLIENT_SECRET: z.string(),
  AWS_S3_REGION: z.string(),
  AWS_S3_ACCESS_KEY: z.string(),
  AWS_S3_SECRET_KEY: z.string(),
  AWS_S3_BUCKET_NAME: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  throw new Error('Please, provide all necessary environment variables! 🚨')
}

export const env = _env.data
