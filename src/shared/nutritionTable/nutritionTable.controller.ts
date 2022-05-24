import { Body, Controller, Get, Post, Render } from '@nestjs/common';
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

  @Post('nutritionTable')
  @Render('nutritionTableTemplate')
  async getNutritionTableHtml(
    @Body() reqNutritionTableData: ReqNutritionTableData,
  ): Promise<ResNutritionTableData> {
    return this.nutritionTableService.getNutritionTable(reqNutritionTableData);
  }
}
