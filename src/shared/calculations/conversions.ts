import convert, { Unit } from 'convert-units';
import { NutritionalIngredient } from '../nutritionTable/NutritionTable';

const calTokJMultiple = 4.184;

export const calTokJ = (cal: number): number => {
  const kJ = cal * calTokJMultiple;
  return roundNumber(kJ);
};

export const roundNumber = (number: number, decimalPoints?: number): number => {
  const factor = Math.pow(10, decimalPoints || 2);
  const roundedNumber = Math.round(number * factor) / factor;
  return roundedNumber;
};

export const calcDailyValuePercent = (
  dailyRecommendedValue: NutritionalIngredient,
  nutritionalIngredient: NutritionalIngredient,
) => {
  if (dailyRecommendedValue.value && nutritionalIngredient.value) {
    const ingredientValueAsGram = convert(nutritionalIngredient.value)
      .from(nutritionalIngredient.unit as Unit)
      .to(dailyRecommendedValue.unit as Unit);
    const dailyValuePercent =
      (ingredientValueAsGram / dailyRecommendedValue.value) * 100;
    return Math.round(dailyValuePercent);
  }
  return 0;
};
