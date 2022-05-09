import { Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import convert from 'convert-units';
import {
  ReqNutritionTableData,
  ResNutritionTableData,
} from './shared/NutritionTable/NutritionTable';
@Injectable()
export class AppService {
  constructor(private readonly i18n: I18nService) {}

  getNutritionTable(
    reqNutritionTableData: ReqNutritionTableData,
  ): ResNutritionTableData {
    const energy = (labelId: string) => {
      return {
        value: reqNutritionTableData[labelId].value,
        unit: this.i18n.translate(`units.${labelId}`),
        label: this.i18n.translate(`nutrition-table.${labelId}`),
      };
    };

    const ingredient = (labelId: string) => {
      const convertedValue = convert(reqNutritionTableData[labelId].value)
        .from(reqNutritionTableData[labelId].unit)
        .toBest();
      return {
        value: convertedValue.val,
        unit: convertedValue.unit,
        label: this.i18n.translate(`nutrition-table.${labelId}`),
      };
    };

    const nutritionTable: ResNutritionTableData = reqNutritionTableData;

    for (const [key] of Object.entries(reqNutritionTableData)) {
      if (key !== 'config' && key !== 'calories' && key !== 'energy') {
        nutritionTable[key] = ingredient(key);
      } else if (key !== 'config') {
        nutritionTable[key] = energy(key);
      }
    }

    return nutritionTable;
  }
}
