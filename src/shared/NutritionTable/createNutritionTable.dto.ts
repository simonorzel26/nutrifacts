import { Config } from './Config';

/* eslint-disable prettier/prettier */
export class CreateNutritionTableDto {
  config: Config;
  calories: number;
  caloriesUnit: string;                 //	Energy	The number of calories.
  carbohydrateContent: number;
  carbohydrateContentUnit: string;      //	Mass	The number of grams of carbohydrates.
  cholesterolContent: number;
  cholesterolContentUnit: string;       //	Mass	The number of milligrams of cholesterol.
  fatContent: number;
  fatContentUnit: string;               //	Mass	The number of grams of fat.
  fiberContent: number;
  fiberContentUnit: string;             //	Mass	The number of grams of fiber.
  proteinContent: number;
  proteinContentUnit: string;           //	Mass	The number of grams of protein.
  saturatedFatContent: number;
  saturatedFatContentUnit: string;      //	Mass	The number of grams of saturated fat.
  servingSize: number;
  servingSizeUnit: string;              //	Text	The serving size, in terms of the number of volume or mass.
  sodiumContent: number;
  sodiumContentUnit: string;            //	Mass	The number of milligrams of sodium.
  sugarContent: number;
  sugarContentUnit: string;             //	Mass	The number of grams of sugar.
  transFatContent: number;
  transFatContentUnit: string;          //	Mass	The number of grams of trans fat.
  unsaturatedFatContent: number;
  unsaturatedFatContentUnit: string;    //	Mass	The number of grams of unsaturated fat.
}
