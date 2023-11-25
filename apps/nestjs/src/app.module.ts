import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

import { CatsModule } from '~/cats/cats.module'
import { appConfig } from '~/config/app.config'

@Module({
  imports: [
    CatsModule,
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('app.mongoUri'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
