import { ReqConfig } from './Config';
import { NutritionalIngredient } from './NutritionTable';

/* eslint-disable prettier/prettier */
export class CreateNutritionTableDto {
  reqConfig: ReqConfig;

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
}
