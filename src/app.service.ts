/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as convert from 'convert-units';

// NutritionTable is based off of https://schema.org/NutritionInformation
export type NutritionTable = {
  calories: number,               //	Energy	The number of calories.
  carbohydrateContent: number,    //	Mass	The number of grams of carbohydrates.
  cholesterolContent: number,     //	Mass	The number of milligrams of cholesterol.
  fatContent: number,             //	Mass	The number of grams of fat.
  fiberContent: number,           //	Mass	The number of grams of fiber.
  proteinContent: number,         //	Mass	The number of grams of protein.
  saturatedFatContent: number,    //	Mass	The number of grams of saturated fat.
  servingSize: number,            //	Text	The serving size, in terms of the number of volume or mass.
  sodiumContent: number,          //	Mass	The number of milligrams of sodium.
  sugarContent: number,           //	Mass	The number of grams of sugar.
  transFatContent: number,        //	Mass	The number of grams of trans fat.
  unsaturatedFatContent: number,  //	Mass	The number of grams of unsaturated fat.
};
@Injectable()
export class AppService {
  getNutritionTable(): NutritionTable {
    const nutritionTable: NutritionTable = {
      calories: convert(1).from('l').to('ml'),
      carbohydrateContent: 1,
      cholesterolContent: 1,
      fatContent: 1,
      fiberContent: 1,
      proteinContent: 1,
      saturatedFatContent: 1,
      servingSize: 1,
      sodiumContent: 1,
      sugarContent: 1,
      transFatContent: 1,
      unsaturatedFatContent: 1,
    };
    return nutritionTable;
  }
}
