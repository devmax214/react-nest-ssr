import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { RecipeService } from './recipe.service';

@Controller('api/recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  public async getAll() {
    return this.recipeService.getAllRecipes();
  }
  
  @Get(':name')
  public async getOne(@Param('name') name: string) {
    const recipe = this.recipeService.getRecipeByName(name);
    if (!recipe) {
      throw new NotFoundException();
    }
    return recipe;
  }
}
