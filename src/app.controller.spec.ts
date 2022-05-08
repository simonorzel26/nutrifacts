import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import createNutritionTableDtoJson from './shared/NutritionTable/createNutritionTableDto.json';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(
        appController.getNutritionTable(createNutritionTableDtoJson),
      ).toHaveProperty('calories');
    });
  });
});
