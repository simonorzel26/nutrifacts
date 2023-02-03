import { NutritionalIngredient } from "../nutritionTable/NutritionTable.entity";


export const dailyValues: {[key: string]:NutritionalIngredient} = {
  carbohydrateContent: {
    value: 275,
    unit: 'g',
  },
  fiberContent: {
    value: 28,
    unit: 'g',
  },
  sugarContent: {
    value: 50,
    unit: 'g',
  },
  cholesterolContent: {
    value: 300,
    unit: 'mg',
  },
  proteinContent: {
    value: 50,
    unit: 'g',
  },
  sodiumContent: {
    value: 2300,
    unit: 'mg',
  },

  fatContent: {
    value: 78,
    unit: 'g',
  },
  saturatedFatContent: {
    value: 20,
    unit: 'g',
  },
};