import { Dog } from '@company/types'
import { Controller, Get } from '@nestjs/common'

import { DogsService } from './dogs.service'

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  async findAll(): Promise<Dog[]> {
    return this.dogsService.findAll()
  }
}
