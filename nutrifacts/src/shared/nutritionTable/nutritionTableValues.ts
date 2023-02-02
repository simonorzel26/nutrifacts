import convert, { Unit } from 'convert-units';
import { excludedUnits } from '../constants/excludedUnits';
import {
  NutritionTableData,
  NutritionalIngredient,
  ReqNutritionTableData,
  ResNutritionTableData,
} from './NutritionTable';
import { calcDailyValuePercent, calTokJ } from '../calculations/conversions';
import { dailyValues } from '../constants/dailyValues';
import { useTranslation } from 'next-i18next';

export const nutritionTableValues = (
  reqNutritionTableData: ReqNutritionTableData,
): ResNutritionTableData => {
  const { nutritionTable } = useTranslation('nutritionTable');
  const { units } = useTranslation('units');

  const energy = (labelId: string): NutritionalIngredient | undefined => {
    const ingredient = reqNutritionTableData.nutritionTableData['calories'];
    if (!ingredient) return;

    const kJVal = calTokJ(
      ingredient.value,
    );

    return {
      value: kJVal,
      unit: units(`${labelId}`),
      label: nutritionTable(`${labelId}`),
    };
  };

  const ingredient = (labelId: string): NutritionalIngredient | undefined => {

    const ingredient = reqNutritionTableData.nutritionTableData[labelId];

    if (!ingredient) return;

    if (ingredient) {
      if (labelId === 'calories' && ingredient.value) {
        return {
          value: ingredient.value,
          unit: units(`${labelId}`),
          label: nutritionTable(`${labelId}`),
        };
      } else {
        const convertedValue = convert(
          ingredient.value,
        )
          .from(ingredient.unit as Unit)
          .toBest({ exclude: excludedUnits });

        const nutritionalIngredient = {
          value: convertedValue.val,
          unit: convertedValue.unit,
          label: nutritionTable(`${labelId}`),
          dailyValuePercent: 0
        };

        const dailyReccomendedValue = dailyValues[labelId];

        if (dailyReccomendedValue) {
          const dailyValuePercent = calcDailyValuePercent(
            dailyReccomendedValue,
            nutritionalIngredient,
          );
          if (!dailyValuePercent) return;

          nutritionalIngredient.dailyValuePercent = dailyValuePercent;
        }

        return nutritionalIngredient;
      }
    }

    return;
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
      amountPerServingLabel: nutritionTable(`amountPerServingLabel`),
      percentDailyValueLabel: nutritionTable(`percentDailyValueLabel`),
      percentDailyValueSubtext: nutritionTable(`percentDailyValueSubtext`),
      dailyValueLabel: nutritionTable(`dailyValueLabel`),
      nutritionFactsLabel: nutritionTable(`nutritionFactsLabel`,
      ),
    },
  };

  return resNutritionTable;
}
