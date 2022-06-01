import { Module } from '@nestjs/common';
import { NutritionTableModule } from './shared/nutritionTable/nutritionTable.module';
import { AuthModule } from './shared/auth/auth.module';
import { UsersModule } from './shared/users/users.module';
import { LoginModule } from './shared/login/login.module';

@Module({
  imports: [NutritionTableModule, LoginModule, AuthModule, UsersModule],
})
export class AppModule {}
