import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import reqNutritionTableData from './shared/NutritionTable/reqNutritionTableData.json';
import resNutritionTableData from './shared/NutritionTable/resNutritionTableData.json';
import nutritionLabelTranslationEN from './i18n/en/nutrition-table.json';
import path from 'path';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
      imports: [
        I18nModule.forRoot({
          fallbackLanguage: 'en',
          loaderOptions: {
            path: path.join(__dirname, '/i18n/'),
            watch: true,
          },
          resolvers: [
            { use: QueryResolver, options: ['lang'] },
            AcceptLanguageResolver,
          ],
        }),
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return nutrition table data"', async () => {
      const nutritionTable = await appController.getNutritionTable(
        reqNutritionTableData,
      );
      expect(nutritionTable).toBeDefined();
      expect(nutritionTable).toMatchObject(resNutritionTableData);
    });

    it('should return properly translated labels and units"', async () => {
      const nutritionTable = await appController.getNutritionTable(
        reqNutritionTableData,
      );
      expect(nutritionTable).toBeDefined();
      expect(nutritionTable.calories.value).toBe(100);
      expect(nutritionTable.calories.unit).toBe('Kcal');
      expect(nutritionTable.calories.label).toBe(
        nutritionLabelTranslationEN.calories,
      );
    });

    it('should recieve config values', async () => {
      const nutritionTable = await appController.getNutritionTable(
        reqNutritionTableData,
      );
      expect(nutritionTable).toBeDefined();
      expect(nutritionTable.config.inputUnitType).toBe('metric');
    });
  });
});
