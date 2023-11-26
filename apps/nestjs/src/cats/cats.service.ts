import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import type { CreateCatDto } from './dto/create-cat.dto'
import { Cat } from './schemas/cat.schema'

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  async create(
    createCatDto: CreateCatDto | CreateCatDto[],
  ): Promise<Cat | Cat[]> {
    if (Array.isArray(createCatDto)) {
      const createdCats = await this.catModel.insertMany(createCatDto)
      return createdCats
    }

    const createdCat = await this.catModel.create(createCatDto)
    return createdCat
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec()
  }

  async findOne(id: string): Promise<Cat> {
    return this.catModel.findOne({ _id: id }).exec()
  }

  async delete(id: string) {
    const deletedCat = await this.catModel.findByIdAndRemove({ _id: id }).exec()
    return deletedCat
  }
}
