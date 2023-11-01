import { Injectable } from '@nestjs/common';
import * as data from './recipes.data.json';

export interface IRecipeData {
  name?: string;
  description?: string;
  imageURL?: string;
}

@Injectable()
export class RecipeService {
  public getAllRecipes() {
    return data;
  }

  public getRecipeByName(name: string): IRecipeData {
    return data.find(recipe => recipe.name === name);
  }
}
