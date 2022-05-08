import { Injectable } from '@nestjs/common';
// import convert from 'convert-units';
import { NutritionTable } from './shared/NutritionTable/NutritionTable';
@Injectable()
export class AppService {
  getNutritionTable(createNutritionTableDto): NutritionTable {
    console.log(createNutritionTableDto);
    const nutritionTable: NutritionTable = {
      calories: 1,
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
