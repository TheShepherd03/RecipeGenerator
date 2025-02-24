import { Controller, Get, Post, Put, Delete, Body, Query, Param, NotFoundException } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { Recipe, DetailedRecipe } from './recipe.interface';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post()
  async create(@Body() recipe: Recipe): Promise<Recipe> {
    return this.recipeService.create(recipe);
  }

  @Get()
  async findAll(): Promise<Recipe[]> {
    return this.recipeService.findAll();
  }

  @Get('search')
  async searchByIngredients(@Query('ingredient') ingredient: string): Promise<Recipe[]> {
    return this.recipeService.searchByIngredients(ingredient);
  }

  @Get(':id')
  async getRecipeById(@Param('id') id: string): Promise<DetailedRecipe> {
    return this.recipeService.getRecipeById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() recipe: Recipe): Promise<Recipe> {
    const updatedRecipe = await this.recipeService.update(id, recipe);
    if (!updatedRecipe) {
      throw new NotFoundException('Recipe not found');
    }
    return updatedRecipe;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    const result = await this.recipeService.remove(id);
    if (!result) {
      throw new NotFoundException('Recipe not found');
    }
  }
}