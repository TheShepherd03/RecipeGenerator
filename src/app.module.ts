import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RecipeModule } from './recipes/recipe.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RecipeModule,
  ],
})
export class AppModule {}