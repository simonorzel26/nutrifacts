import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import createNutritionTableDtoJson from './shared/NutritionTable/createNutritionTableDto.json';
import nutritionLabelTranslationEN from './i18n/en/nutrition-table.json';
import path from 'path';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';

const exampleNutritionTableResponse = {
  calories: { value: 100, unit: 'Kcal', label: 'Calories' },
  carbohydrateContent: { value: 1, unit: 'g', label: 'Carbohydrates' },
  cholesterolContent: { value: 1, unit: 'g', label: 'Cholesterol' },
  fatContent: { value: 1, unit: 'g', label: 'Fat' },
  fiberContent: { value: 1, unit: 'g', label: 'Fiber' },
  proteinContent: { value: 1, unit: 'g', label: 'Protein' },
  saturatedFatContent: { value: 1, unit: 'g', label: 'Saturated Fats' },
  servingSize: { value: 1, unit: 'g', label: 'Serving Size' },
  sodiumContent: { value: 1, unit: 'g', label: 'Sodium' },
  sugarContent: { value: 1, unit: 'g', label: 'Sugars' },
  transFatContent: { value: 1, unit: 'g', label: 'Trans Fats' },
  unsaturatedFatContent: {
    value: 1,
    unit: 'g',
    label: 'Unsaturated Fats',
  },
};

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
        createNutritionTableDtoJson,
      );
      expect(nutritionTable).toBeDefined();
      expect(nutritionTable).toMatchObject(exampleNutritionTableResponse);
    });

    it('should return properly translated labels and units"', async () => {
      const nutritionTable = await appController.getNutritionTable(
        createNutritionTableDtoJson,
      );
      expect(nutritionTable).toBeDefined();
      expect(nutritionTable.calories.value).toBe(100);
      expect(nutritionTable.calories.unit).toBe('Kcal');
      expect(nutritionTable.calories.label).toBe(
        nutritionLabelTranslationEN.calories,
      );
    });
  });
});
