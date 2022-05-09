import { Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import convert from 'convert-units';
import {
  ReqNutritionTableData,
  ResNutritionTableData,
} from './shared/NutritionTable/NutritionTable';
@Injectable()
export class AppService {
  constructor(private readonly i18n: I18nService) {}

  getNutritionTable(
    reqNutritionTableData: ReqNutritionTableData,
  ): ResNutritionTableData {
    const energy = (labelId: string) => {
      if (reqNutritionTableData[labelId]) {
        return {
          value: reqNutritionTableData[labelId].value,
          unit: this.i18n.translate(`units.${labelId}`),
          label: this.i18n.translate(`nutrition-table.${labelId}`),
        };
      }
    };

    const ingredient = (labelId: string) => {
      if (reqNutritionTableData[labelId]) {
        const convertedValue = convert(reqNutritionTableData[labelId].value)
          .from(reqNutritionTableData[labelId].unit)
          .toBest();
        return {
          value: convertedValue.val,
          unit: convertedValue.unit,
          label: this.i18n.translate(`nutrition-table.${labelId}`),
        };
      }
    };

    const resNutritionTable: ResNutritionTableData = {
      config: {
        inputUnitType: reqNutritionTableData.config.inputUnitType,
      },

      calories: energy('calories'),
      energy: energy('energy'),
      servingSize: ingredient('servingSize'),

      carbohydrateContent: ingredient('carbohydrateContent'),
      fiberContent: ingredient('fiberContent'),
      sugarContent: ingredient('sugarContent'),
      starch: ingredient('starch'),

      cholesterolContent: ingredient('cholesterolContent'),
      proteinContent: ingredient('proteinContent'),
      sodiumContent: ingredient('sodiumContent'),

      fatContent: ingredient('fatContent'),
      saturatedFatContent: ingredient('saturatedFatContent'),
      transFatContent: ingredient('transFatContent'),
      unsaturatedFatContent: ingredient('unsaturatedFatContent'),
      monoUnsaturates: ingredient('monoUnsaturates'),
      polyUnsaturates: ingredient('polyUnsaturates'),
      polyols: ingredient('polyols'),

      potassium: ingredient('potassium'),
      vitaminC: ingredient('vitaminC'),
      calcium: ingredient('calcium'),
      iron: ingredient('iron'),
      vitaminD: ingredient('vitaminD'),
      vitaminB6: ingredient('vitaminB6'),
      cobalamin: ingredient('cobalamin'),
      magnesium: ingredient('magnesium'),

      amountPerLabel: this.i18n.translate(`nutrition-table.amountPerLabel`),
      percentDailyValueLabel: this.i18n.translate(
        `nutrition-table.percentDailyValueLabel`,
      ),
      percentDailyValueSubtext: this.i18n.translate(
        `nutrition-table.percentDailyValueSubtext`,
      ),
    };

    return resNutritionTable;
  }
}
