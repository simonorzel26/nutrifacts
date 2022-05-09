import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import {
  NutritionTableData,
  ReqNutritionTableData,
} from './shared/NutritionTable/NutritionTable';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getNutritionTable(
    @Body() reqNutritionTableData: ReqNutritionTableData,
  ): Promise<NutritionTableData> {
    return this.appService.getNutritionTable(reqNutritionTableData);
  }
}
