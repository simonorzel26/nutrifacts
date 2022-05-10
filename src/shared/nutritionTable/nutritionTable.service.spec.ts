import { Test, TestingModule } from '@nestjs/testing';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
import path from 'path';
import { NutritionTableController } from './nutritionTable.controller';
import { NutritionTableService } from './nutritionTable.service';
import nutritionLabelTranslationEN from './../../i18n/en/nutrition-table.json';
import reqNutritionTableData from './reqNutritionTableData.json';

describe('EventsService', () => {
  let appController: NutritionTableController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NutritionTableController],
      providers: [NutritionTableService],
      imports: [
        I18nModule.forRoot({
          fallbackLanguage: 'en',
          loaderOptions: {
            path: path.join(__dirname, '../../i18n/'),
            watch: true,
          },
          resolvers: [
            { use: QueryResolver, options: ['lang'] },
            AcceptLanguageResolver,
          ],
        }),
      ],
    }).compile();

    appController = app.get<NutritionTableController>(NutritionTableController);
  });
  
  it('should return properly translated labels and units"', async () => {
    const nutritionTable = await appController.getNutritionTable(
      reqNutritionTableData,
    );
    expect(nutritionTable).toBeDefined();
    expect(nutritionTable.calories.value).toBe(
      reqNutritionTableData.calories.value,
    );
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
 
  it('should return an energy value in kJ/J', async () => {
    const nutritionTable = await appController.getNutritionTable(
      reqNutritionTableData,
    );
    expect(nutritionTable).toBeDefined();
    expect(nutritionTable.energy.value).toBe(585.76);
    expect(nutritionTable.energy.unit).toBe('kJ');
    expect(nutritionTable.energy.label).toBe(
      nutritionLabelTranslationEN.energy,
    );
  });
});

