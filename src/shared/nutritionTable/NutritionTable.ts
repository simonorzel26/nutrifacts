/* eslint-disable prettier/prettier */
enum inputUnitTypes {
  Metric = 'metric',
  Imperial = 'imperial',
}

type Config = {
  inputUnitType: inputUnitTypes.Metric | inputUnitTypes.Imperial | string;
};

export type NutritionalIngredient = {
  value: number;
  unit: string;
  label?: string;
} | null;

// NutritionTable is based off of https://schema.org/NutritionInformation
export type NutritionTableData = {
  calories: NutritionalIngredient;                    // kcal per 100g or 100ml
  energy?: NutritionalIngredient;                      // kJ per 100g or 100ml
  servingSize?: NutritionalIngredient;

  carbohydrateContent: NutritionalIngredient;
  fiberContent: NutritionalIngredient;
  sugarContent: NutritionalIngredient;
  starch?: NutritionalIngredient;

  cholesterolContent: NutritionalIngredient;
  proteinContent: NutritionalIngredient;
  sodiumContent: NutritionalIngredient;

  fatContent: NutritionalIngredient;
  saturatedFatContent?: NutritionalIngredient;
  transFatContent?: NutritionalIngredient;
  unsaturatedFatContent?: NutritionalIngredient;
  monoUnsaturates?: NutritionalIngredient;
  polyUnsaturates?: NutritionalIngredient;
  polyols?: NutritionalIngredient;

  potassium?: NutritionalIngredient;
  vitaminC?: NutritionalIngredient;
  calcium?: NutritionalIngredient;
  iron?: NutritionalIngredient;
  vitaminD?: NutritionalIngredient;
  vitaminB6?: NutritionalIngredient;
  cobalamin?: NutritionalIngredient;
  magnesium?: NutritionalIngredient;

  // #TODO vitamins & minerals...  
  // https://ec.europa.eu/food/safety/labelling-and-nutrition/food-information-consumers-legislation/nutrition-labelling_en
  // https://europa.eu/youreurope/business/product-requirements/food-labelling/nutrition-declaration/index_en.htm
  
};

export type Labels = {
  amountPerLabel: string;
  percentDailyValueLabel: string;
  percentDailyValueSubtext: string;
}

export type ReqNutritionTableData = {
  config: Config;
  nutritionTableData: NutritionTableData;
};

export type ResNutritionTableData = ReqNutritionTableData & {
  labels: Labels;
};
