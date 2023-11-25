import { registerAs } from '@nestjs/config'

export type AppConfig = {
  env: 'development' | 'production' | 'test'
  port: number
}

export const appConfig = registerAs(
  'app',
  () =>
    ({
      // App
      env: process.env.NODE_ENV || 'development',
      port: parseInt(process.env.PORT) || 2222,
      host: process.env.HOST || '0.0.0.0',

      // TODO: Move to database config
      mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017',
    }) as AppConfig,
)
