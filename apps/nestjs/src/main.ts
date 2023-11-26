import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function bootstrap() {
  const logger = new Logger('NestApplication')
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)
  const port = configService.get<string>('app.port')
  const host = configService.get<string>('app.host')

  await app.listen(port, host)

  logger.log(`Nest application running on port ${port}`)
}

bootstrap().catch(error => {
  console.error(error)
  process.exit(1)
})
