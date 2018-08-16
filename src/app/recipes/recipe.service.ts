import { Recipe } from "./recipe.model";

export class RecipeService{
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', "This is test", "https://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg"),
        new Recipe('Second Recipe', "This is test2", "https://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg")
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}