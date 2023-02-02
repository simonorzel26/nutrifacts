import { Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import convert from 'convert-units';
import { excludedUnits } from '../constants/excludedUnits';
import {
  NutritionalIngredient,
  ReqNutritionTableData,
  ResNutritionTableData,
} from './NutritionTable';
import { calcDailyValuePercent, calTokJ } from '../calculations/conversions';
import { dailyValues } from '../constants/dailyValues';
@Injectable()
export class NutritionTableService {
  constructor(private readonly i18n: I18nService) {}

  getNutritionTable(
    reqNutritionTableData: ReqNutritionTableData,
  ): ResNutritionTableData {
    const energy = (labelId: string) => {
      const kJVal = calTokJ(
        reqNutritionTableData.nutritionTableData['calories'].value,
      );
      return {
        value: kJVal,
        unit: this.i18n.translate(`units.${labelId}`),
        label: this.i18n.translate(`nutrition-table.${labelId}`),
      };
    };

    const ingredient = (labelId: string) => {
      let nutritionalIngredient: NutritionalIngredient = null;

      if (reqNutritionTableData.nutritionTableData[labelId]) {
        if (labelId === 'calories') {
          nutritionalIngredient = {
            value: reqNutritionTableData.nutritionTableData[labelId].value,
            unit: this.i18n.translate(`units.${labelId}`),
            label: this.i18n.translate(`nutrition-table.${labelId}`),
          };
        } else {
          const convertedValue = convert(
            reqNutritionTableData.nutritionTableData[labelId].value,
          )
            .from(reqNutritionTableData.nutritionTableData[labelId].unit)
            .toBest({ exclude: excludedUnits });
          nutritionalIngredient = {
            value: convertedValue.val,
            unit: convertedValue.unit,
            label: this.i18n.translate(`nutrition-table.${labelId}`),
          };

          const dailyRecommendedValue = dailyValues[labelId];

          if (dailyRecommendedValue) {
            nutritionalIngredient.dailyValuePercent = calcDailyValuePercent(
              dailyRecommendedValue,
              nutritionalIngredient,
            );
          }
        }
      }

      return nutritionalIngredient;
    };

    const resNutritionTable: ResNutritionTableData = {
      config: {
        inputUnitType: reqNutritionTableData.config.inputUnitType,
      },
      nutritionTableData: {
        calories: ingredient('calories'),
        energy: energy('energy'),
        servingPerContainer: ingredient('servingPerContainer'),
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
      },
      labels: {
        amountPerServingLabel: this.i18n.translate(
          `nutrition-table.amountPerServingLabel`,
        ),
        percentDailyValueLabel: this.i18n.translate(
          `nutrition-table.percentDailyValueLabel`,
        ),
        percentDailyValueSubtext: this.i18n.translate(
          `nutrition-table.percentDailyValueSubtext`,
        ),
        dailyValueLabel: this.i18n.translate(`nutrition-table.dailyValueLabel`),
        nutritionFactsLabel: this.i18n.translate(
          `nutrition-table.nutritionFactsLabel`,
        ),
      },
    };

    return resNutritionTable;
  }
}
