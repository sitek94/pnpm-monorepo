import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import type { Cat as CatInterface } from '@repo/types'
import type { HydratedDocument } from 'mongoose'

export type CatDocument = HydratedDocument<Cat>

@Schema()
export class Cat implements CatInterface {
  _id: string

  @Prop()
  name: string

  @Prop()
  age: number

  @Prop()
  breed: string
}

export const CatSchema = SchemaFactory.createForClass(Cat)
