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
    expect(nutritionTable.nutritionTableData.calories.value).toBe(
      reqNutritionTableData.nutritionTableData.calories.value,
    );
    expect(nutritionTable.nutritionTableData.calories.unit).toBe('Kcal');
    expect(nutritionTable.nutritionTableData.calories.label).toBe(
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
    expect(nutritionTable.nutritionTableData.energy.value).toBe(585.76);
    expect(nutritionTable.nutritionTableData.energy.unit).toBe('kJ');
    expect(nutritionTable.nutritionTableData.energy.label).toBe(
      nutritionLabelTranslationEN.energy,
    );
  });
});

