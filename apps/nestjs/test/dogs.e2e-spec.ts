import type { INestApplication } from '@nestjs/common'
import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import * as request from 'supertest'

import { DogsModule } from '~/dogs/dogs.module'
import { DogsService } from '~/dogs/dogs.service'

describe('UsersController (e2e)', () => {
  let app: INestApplication

  const dogsServiceMock = {
    findAll: jest.fn().mockResolvedValue([]),
  }

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [DogsModule],
    })
      .overrideProvider(DogsService)
      .useValue(dogsServiceMock)
      .compile()

    app = moduleRef.createNestApplication()
    await app.init()
  })

  it('[GET] /users', async () => {
    await request(app.getHttpServer()).get('/dogs').expect(200).expect([])
  })

  afterAll(async () => {
    await app.close()
  })
})
