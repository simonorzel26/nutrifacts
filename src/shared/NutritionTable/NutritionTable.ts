/* eslint-disable prettier/prettier */

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