import { Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { CreateNutritionTableDto } from './shared/NutritionTable/createNutritionTable.dto';
// import convert from 'convert-units';
import { NutritionTableData } from './shared/NutritionTable/NutritionTable';
@Injectable()
export class AppService {
  constructor(private readonly i18n: I18nService) {}

  getNutritionTable(
    createNutritionTableDto: CreateNutritionTableDto,
  ): NutritionTableData {
    console.log(createNutritionTableDto);
    const sampleIngredient = {
      value: 1,
      unit: 'g',
      label: this.i18n.translate('nutrition-table.calories'),
    };
    const nutritionTable: NutritionTableData = {
      calories: sampleIngredient,
      carbohydrateContent: sampleIngredient,
      cholesterolContent: sampleIngredient,
      fatContent: sampleIngredient,
      fiberContent: sampleIngredient,
      proteinContent: sampleIngredient,
      saturatedFatContent: sampleIngredient,
      servingSize: sampleIngredient,
      sodiumContent: sampleIngredient,
      sugarContent: sampleIngredient,
      transFatContent: sampleIngredient,
      unsaturatedFatContent: sampleIngredient,
    };
    return nutritionTable;
  }
}
