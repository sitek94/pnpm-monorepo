import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

import { CatsModule } from '~/cats/cats.module'
import { appConfig } from '~/config/app.config'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DogsModule } from './dogs/dogs.module'

@Module({
  imports: [
    CatsModule,
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }),
    DogsModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('app.mongoUri'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
