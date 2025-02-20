import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { RecipeSchema } from './recipe.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Recipe', schema: RecipeSchema }])],
  controllers: [RecipeController],
  providers: [RecipeService],
})
export class RecipeModule {} 