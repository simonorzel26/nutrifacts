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
    const ingredient = (labelId) => {
      return {
        value: createNutritionTableDto[labelId].value,
        unit: createNutritionTableDto[labelId].unit,
        label: this.i18n.translate(`nutrition-table.${labelId}`),
      };
    };
    const nutritionTable: NutritionTableData = {
      calories: ingredient('calories'),
      carbohydrateContent: ingredient('carbohydrateContent'),
      cholesterolContent: ingredient('cholesterolContent'),
      fatContent: ingredient('fatContent'),
      fiberContent: ingredient('fiberContent'),
      proteinContent: ingredient('proteinContent'),
      saturatedFatContent: ingredient('saturatedFatContent'),
      servingSize: ingredient('servingSize'),
      sodiumContent: ingredient('sodiumContent'),
      sugarContent: ingredient('sugarContent'),
      transFatContent: ingredient('transFatContent'),
      unsaturatedFatContent: ingredient('unsaturatedFatContent'),
    };
    return nutritionTable;
  }
}
