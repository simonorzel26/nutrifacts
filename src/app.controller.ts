import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateNutritionTableDto } from './shared/NutritionTable/createNutritionTable.dto';
import { NutritionTableData } from './shared/NutritionTable/NutritionTable';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getNutritionTable(
    @Body() createNutritionTableDto: CreateNutritionTableDto,
  ): Promise<NutritionTableData> {
    return this.appService.getNutritionTable(createNutritionTableDto);
  }
}
