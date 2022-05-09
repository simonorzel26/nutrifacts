import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ReqNutritionTableData,
  ResNutritionTableData,
} from './shared/NutritionTable/NutritionTable';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getNutritionTable(
    @Body() reqNutritionTableData: ReqNutritionTableData,
  ): Promise<ResNutritionTableData> {
    return this.appService.getNutritionTable(reqNutritionTableData);
  }
}
