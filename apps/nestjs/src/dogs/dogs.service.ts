import { Dog } from '@company/types'
import { Injectable } from '@nestjs/common'

@Injectable()
export class DogsService {
  async findAll(): Promise<Dog[]> {
    return [
      {
        _id: '1',
        name: 'Barnaba',
      },
      {
        _id: '2',
        name: 'Homelander',
      },
      {
        _id: '3',
        name: 'Butcher',
      },
    ]
  }
}
