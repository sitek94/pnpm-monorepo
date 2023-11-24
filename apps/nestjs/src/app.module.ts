import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CatsModule } from './cats/cats.module'
import { ConfigModule } from '@nestjs/config'
import { appConfig } from './config/app.config'

@Module({
  imports: [
    CatsModule,
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }),
    MongooseModule.forRoot('mongodb://localhost:27017/db'),
  ],
})
export class AppModule {}
