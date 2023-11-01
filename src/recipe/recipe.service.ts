import { Injectable } from '@nestjs/common';
import * as data from './recipes.data.json';

@Injectable()
export class RecipeService {
  public getAllRecipes() {
    return data;
  }

  public getRecipeByName(name: string) {
    return data.find(recipe => recipe.name === name);
  }
}
