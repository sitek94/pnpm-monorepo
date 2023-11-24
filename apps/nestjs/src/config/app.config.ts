import { registerAs } from '@nestjs/config'

export type AppConfig = {
  env: 'development' | 'production' | 'test'
  port: number
}

export const appConfig = registerAs(
  'app',
  () =>
    ({
      env: process.env.NODE_ENV || 'development',
      port: parseInt(process.env.PORT) || 2222,
    }) as AppConfig,
)
