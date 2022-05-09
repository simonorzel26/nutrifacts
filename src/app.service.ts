import { Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { CreateNutritionTableDto } from './shared/NutritionTable/createNutritionTable.dto';
import convert from 'convert-units';
import { NutritionTableData } from './shared/NutritionTable/NutritionTable';
@Injectable()
export class AppService {
  constructor(private readonly i18n: I18nService) {}

  getNutritionTable(
    createNutritionTableDto: CreateNutritionTableDto,
  ): NutritionTableData {
    // Calories don't need to be converted, only translated
    const calories = (labelId) => {
      return {
        value: createNutritionTableDto[labelId].value,
        unit: this.i18n.translate(`units.${labelId}`),
        label: this.i18n.translate(`nutrition-table.${labelId}`),
      };
    };

    const ingredient = (labelId) => {
      const convertedValue = convert(createNutritionTableDto[labelId].value)
        .from(createNutritionTableDto[labelId].unit)
        .toBest();
      return {
        value: convertedValue.val,
        unit: convertedValue.unit,
        label: this.i18n.translate(`nutrition-table.${labelId}`),
      };
    };

    const nutritionTable: NutritionTableData = {
      calories: calories('calories'),
      servingSize: ingredient('servingSize'),
      carbohydrateContent: ingredient('carbohydrateContent'),
      cholesterolContent: ingredient('cholesterolContent'),
      fatContent: ingredient('fatContent'),
      fiberContent: ingredient('fiberContent'),
      proteinContent: ingredient('proteinContent'),
      saturatedFatContent: ingredient('saturatedFatContent'),
      sodiumContent: ingredient('sodiumContent'),
      sugarContent: ingredient('sugarContent'),
      transFatContent: ingredient('transFatContent'),
      unsaturatedFatContent: ingredient('unsaturatedFatContent'),
    };
    return nutritionTable;
  }
}
