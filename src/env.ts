import { z } from 'zod'

let parsedEnv

try {
  const envSchemaLocal = z.object({
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  })

  parsedEnv = envSchemaLocal.safeParse(process.env)

  if (!parsedEnv.success) {
    console.error(
      'Invalid envirements variable',
      parsedEnv.error.flatten().formErrors,
    )

    throw new Error('Invalid envirements variables.')
  }
} catch (err) {
  const envSchemaLocal = z.object({
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  })

  parsedEnv = envSchemaLocal.safeParse(process.env)

  if (!parsedEnv.success) {
    console.error(
      'Invalid envirements variable',
      parsedEnv.error.flatten().formErrors,
    )

    throw new Error('Invalid envirements variables.')
  }
}
export const env = parsedEnv.data
