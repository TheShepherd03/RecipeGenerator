import { Controller, Get, Post, Put, Delete, Body, Query, Param, NotFoundException } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.interface';

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
  async searchByIngredients(@Query('ingredients') ingredients: string): Promise<Recipe[]> {
    const ingredientsArray = ingredients.split(',');
    return this.recipeService.searchByIngredients(ingredientsArray);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Recipe> {
    const recipe = await this.recipeService.findOne(id);
    if (!recipe) {
      throw new NotFoundException('Recipe not found');
    }
    return recipe;
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