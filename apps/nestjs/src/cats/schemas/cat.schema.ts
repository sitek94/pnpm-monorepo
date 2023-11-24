import type { Cat as CatInterface } from '@company/types'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type CatDocument = HydratedDocument<Cat>

@Schema()
export class Cat implements CatInterface {
  @Prop()
  _id: string

  @Prop()
  name: string

  @Prop()
  age: number

  @Prop()
  breed: string
}

export const CatSchema = SchemaFactory.createForClass(Cat)
