export interface Recipe {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface MealDBResponse {
  meals: Recipe[] | null;
}

export interface DetailedRecipe extends Recipe {
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strTags: string;
  strYoutube: string;
  strSource: string | null;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
  ingredients: {
    ingredient: string;
    measure: string;
  }[];
  [key: string]: any; // for dynamic ingredient and measure properties
}

export interface DetailedMealDBResponse {
  meals: DetailedRecipe[] | null;
}