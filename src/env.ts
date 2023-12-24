import { z } from 'zod'

const envSchemaLocal = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  APP_URL: z.string().url(),
})

const parsedEnv = envSchemaLocal.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(
    'Invalid envirements variable',
    parsedEnv.error.flatten().formErrors,
  )

  throw new Error('Invalid envirements variables.')
}

export const env = parsedEnv.data
