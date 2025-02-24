import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Recipe, MealDBResponse, DetailedMealDBResponse, DetailedRecipe } from './recipe.interface';
import { firstValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class RecipeService {
  private readonly apiBaseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private readonly httpService: HttpService) {}

  async create(recipe: Recipe): Promise<Recipe> {
    // This method is not implemented as it's not clear how to create a recipe using TheMealDB API
    throw new Error('Method not implemented');
  }

  async findAll(): Promise<Recipe[]> {
    // This method is not implemented as it's not clear how to fetch all recipes using TheMealDB API
    throw new Error('Method not implemented');
  }

  async searchByIngredients(searchTerm: string): Promise<Recipe[]> {
    // First try searching by ingredient
    const ingredientResponse = await firstValueFrom(
      this.httpService.get<MealDBResponse>(`${this.apiBaseUrl}/filter.php?i=${encodeURIComponent(searchTerm)}`)
    );

    if (ingredientResponse.data.meals) {
      return ingredientResponse.data.meals;
    }

    // If no results found by ingredient, try searching by recipe name
    const recipeNameResponse = await firstValueFrom(
      this.httpService.get<DetailedMealDBResponse>(`${this.apiBaseUrl}/search.php?s=${searchTerm.replace(/ /g, '_')}`)
    );

    // Map the detailed response to match the simpler Recipe interface
    if (recipeNameResponse.data.meals) {
      return recipeNameResponse.data.meals.map(meal => ({
        idMeal: meal.idMeal,
        strMeal: meal.strMeal,
        strMealThumb: meal.strMealThumb
      }));
    }

    // If still no results, return empty array
    return [];
  }

  async getRecipeById(id: string): Promise<DetailedRecipe> {
    const response = await firstValueFrom(
      this.httpService.get<DetailedMealDBResponse>(`${this.apiBaseUrl}/lookup.php?i=${id}`)
    );

    if (!response.data.meals || response.data.meals.length === 0) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }

    const recipe = response.data.meals[0];
    
    // Process ingredients and measurements
    const ingredients: { ingredient: string; measure: string }[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      
      if (ingredient && ingredient.trim() !== '') {
        ingredients.push({
          ingredient: ingredient,
          measure: measure || ''
        });
      }
    }

    // Return formatted recipe with ingredients array
    return {
      ...recipe,
      ingredients
    } as DetailedRecipe;
  }

  async findOne(id: string): Promise<Recipe | null> {
    // This method is not implemented as it's not clear how to fetch a recipe by id using TheMealDB API
    throw new Error('Method not implemented');
  }

  async update(id: string, recipe: Recipe): Promise<Recipe | null> {
    // This method is not implemented as it's not clear how to update a recipe using TheMealDB API
    throw new Error('Method not implemented');
  }

  async remove(id: string): Promise<boolean> {
    // This method is not implemented as it's not clear how to delete a recipe using TheMealDB API
    throw new Error('Method not implemented');
  }
}