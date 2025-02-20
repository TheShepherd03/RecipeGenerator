import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipe } from './recipe.interface';

@Injectable()
export class RecipeService {
  constructor(@InjectModel('Recipe') private recipeModel: Model<Recipe>) {}

  async create(recipe: Recipe): Promise<Recipe> {
    const newRecipe = new this.recipeModel(recipe);
    return newRecipe.save();
  }

  async findAll(): Promise<Recipe[]> {
    return this.recipeModel.find().exec();
  }

  async searchByIngredients(ingredients: string[]): Promise<Recipe[]> {
    return this.recipeModel.find({ ingredients: { $in: ingredients } }).exec();
  }

  async findOne(id: string): Promise<Recipe | null> {
    const recipe = await this.recipeModel.findById(id).exec();
    if (!recipe) {
      throw new Error('Recipe not found');
    }
    return recipe;
  }

  async update(id: string, recipe: Recipe): Promise<Recipe | null> {
    return this.recipeModel.findByIdAndUpdate(id, recipe, { new: true }).exec();
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.recipeModel.findByIdAndDelete(id).exec();
    return result !== null;
  }
}