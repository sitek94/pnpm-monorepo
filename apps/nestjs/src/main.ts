import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { Logger } from '@nestjs/common'

async function bootstrap() {
  const logger = new Logger('NestApplication')
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)
  const port = configService.get('PORT')

  await app.listen(port || 3000)

  logger.log(`Nest application running on port ${port}`)
}
bootstrap()
