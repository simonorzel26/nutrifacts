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
    it('should return nutrition table data"', async () => {
      const nutritionTable = await appController.getNutritionTable(
        createNutritionTableDtoJson,
      );
      expect(nutritionTable).toBeDefined();
      expect(nutritionTable.calories).toBe(1);
    });
  });
});
