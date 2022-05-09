/* eslint-disable prettier/prettier */

export type NutritionalIngredient = {
  value: number;
  unit: string;
  label?: string;
};

// NutritionTable is based off of https://schema.org/NutritionInformation
export type NutritionTableData = {
  calories: NutritionalIngredient;
  servingSize: NutritionalIngredient;
  carbohydrateContent: NutritionalIngredient;
  cholesterolContent: NutritionalIngredient;
  fatContent: NutritionalIngredient;
  fiberContent: NutritionalIngredient;
  proteinContent: NutritionalIngredient;
  saturatedFatContent: NutritionalIngredient;
  sodiumContent: NutritionalIngredient;
  sugarContent: NutritionalIngredient;
  transFatContent: NutritionalIngredient;
  unsaturatedFatContent: NutritionalIngredient;
};
