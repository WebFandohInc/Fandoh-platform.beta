import { z } from 'zod'

const publicEnvSchema = z.object({
  NEXT_PUBLIC_AWS_CLOUDFRONT_URL: z.string(),
})

const _env = publicEnvSchema.safeParse({
  NEXT_PUBLIC_AWS_CLOUDFRONT_URL: process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL,
})

if (!_env.success) {
  throw new Error('Please, provide all necessary environment variables! 🚨')
}

export const publicEnv = _env.data
