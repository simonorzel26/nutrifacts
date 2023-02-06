import { Test, TestingModule } from '@nestjs/testing';
import { NutritionTableController } from './nutritionTable.controller';
import reqNutritionTableData from './reqNutritionTableData.json';
import resNutritionTableData from './resNutritionTableData.json';
import path from 'path';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
import NutritionTableService from './nutritionTable.service;

describe('AppController', () => {
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

  describe('root', () => {
    it('should return nutrition table data"', async () => {
      const nutritionTable = await appController.getNutritionTable(
        reqNutritionTableData,
      );
      expect(nutritionTable).toBeDefined();
      expect(nutritionTable).toMatchObject(resNutritionTableData);
    });
  });

  describe('nutritionTable', () => {
    it('should return nutrition table data"', async () => {
      const nutritionTableHtml = await appController.getNutritionTableHtml(
        reqNutritionTableData,
      );
      expect(nutritionTableHtml).toBeDefined();
    });
  });
});
