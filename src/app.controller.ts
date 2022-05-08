import { Controller, Get } from '@nestjs/common';
import { AppService, NutritionTable } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getNutritionTable(): NutritionTable {
    return this.appService.getNutritionTable();
  }
}
