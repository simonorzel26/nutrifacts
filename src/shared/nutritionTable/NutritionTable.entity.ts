/* eslint-disable prettier/prettier */
enum InputUnitType {
  Metric = 'metric',
  Imperial = 'imperial',
}

class Config  {
  inputUnitType: InputUnitType.Metric | InputUnitType.Imperial | string;
};

export class NutritionalIngredient  {
  value: number;
  unit: string;
  label?: string;
  dailyValuePercent?: number;
};

export class Ingredients  {
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
  
}

// NutritionTable is based off of https://schema.org/NutritionInformation
export class NutritionTableData extends Ingredients  {
  calories: NutritionalIngredient;                    // kcal per 100g or 100ml
  energy?: NutritionalIngredient;                      // kJ per 100g or 100ml
  servingPerContainer?: NutritionalIngredient;
  servingSize?: NutritionalIngredient;
};

export class Labels  {
  amountPerServingLabel: string;
  percentDailyValueLabel: string;
  percentDailyValueSubtext: string;
  dailyValueLabel: string;
  nutritionFactsLabel: string;
}

export class ReqNutritionTableData  {
  config: Config;
  nutritionTableData: NutritionTableData;
};

export class ResNutritionTableData extends ReqNutritionTableData  {
  labels: Labels;
};
