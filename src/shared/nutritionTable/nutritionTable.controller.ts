import { Body, Controller, Post } from '@nestjs/common';
import {
  ReqNutritionTableData,
  ResNutritionTableData,
} from './NutritionTable';
import { NutritionTableService } from './nutritionTable.service';

@Controller()
export class NutritionTableController {
  constructor(private readonly nutritionTableService: NutritionTableService) {}

  @Post()
  async getNutritionTable(
    @Body() reqNutritionTableData: ReqNutritionTableData,
  ): Promise<ResNutritionTableData> {
    return this.nutritionTableService.getNutritionTable(reqNutritionTableData);
  }
}
