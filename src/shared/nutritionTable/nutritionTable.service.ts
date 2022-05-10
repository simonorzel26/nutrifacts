import { Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import convert from 'convert-units';
import { excludedUnits } from '../constants/excludedUnits';
import {
  NutritionalIngredient,
  ReqNutritionTableData,
  ResNutritionTableData,
} from './NutritionTable';
@Injectable()
export class NutritionTableService {
  constructor(private readonly i18n: I18nService) {}

  getNutritionTable(
    reqNutritionTableData: ReqNutritionTableData,
  ): ResNutritionTableData {
    const ingredient = (labelId: string) => {
      let nutritionalIngredient: NutritionalIngredient = null;

      if (reqNutritionTableData[labelId]) {
        if (labelId === 'energy' || labelId === 'calories') {
          nutritionalIngredient = {
            value: reqNutritionTableData[labelId].value,
            unit: this.i18n.translate(`units.${labelId}`),
            label: this.i18n.translate(`nutrition-table.${labelId}`),
          };
        } else {
          const convertedValue = convert(reqNutritionTableData[labelId].value)
            .from(reqNutritionTableData[labelId].unit)
            .toBest({ exclude: excludedUnits });
          nutritionalIngredient = {
            value: convertedValue.val,
            unit: convertedValue.unit,
            label: this.i18n.translate(`nutrition-table.${labelId}`),
          };
        }
      }

      return nutritionalIngredient;
    };

    const resNutritionTable: ResNutritionTableData = {
      config: {
        inputUnitType: reqNutritionTableData.config.inputUnitType,
      },

      calories: ingredient('calories'),
      energy: ingredient('energy'),
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
