import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DogsController } from './dogs/dogs.controller'
import { DogsService } from './dogs/dogs.service'

describe('AppController', () => {
  let appController: AppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController, DogsController],
      providers: [AppService, DogsService],
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe('root', () => {
    it('contains "Hello World"', () => {
      expect(appController.getHello()).toContain('Hello World')
    })
  })
})
