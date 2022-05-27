import { Module } from '@nestjs/common';
import { NutritionTableModule } from './shared/nutritionTable/nutritionTable.module';

@Module({
  imports: [NutritionTableModule],
})
export class AppModule {}
