import { Controller, Get, Param } from '@nestjs/common';
import { ClientService, IPageMetadata } from './client.service';
import { RecipeService, IRecipeData } from '../recipe/recipe.service';

@Controller()
export class ClientController {
  constructor(
    private readonly clientService: ClientService,
    private readonly recipeService: RecipeService,
  ) {}

  @Get('recipe/:name')
  public async getRecipe(@Param('name') name: string) {
    const recipe: IRecipeData = await this.recipeService.getRecipeByName(name);
    const meta: IPageMetadata = {
      title: recipe.name,
      description: recipe.description,
      image: recipe.imageURL,
    };

    return this.clientService.getApp(meta);
  }

  @Get('*')
  public async get() {
    return this.clientService.getApp();
  }
}