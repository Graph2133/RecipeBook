import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService {

    constructor (private shoppingListService:ShoppingListService){
        
    }

    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('Sneaky Pizza',
            "This is test",
            "https://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg",
            [new Ingredient("Meat", 1),
            new Ingredient("Cheese", 5)]),
        new Recipe('Green Soup',
            "This is test2",
            "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA",
            [new Ingredient('Water', 5),
            new Ingredient('Potato', 12)])
    ];

    getRecipes() {
        return this.recipes.slice();
    }


    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}