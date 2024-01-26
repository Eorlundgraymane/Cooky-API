import modelController from '../controllers/sequelizeController.js';
import Recipe from '../models/basic/recipe.js';
import RecipeImage from '../models/xref/recipeImage.js';

export default {
    // GET /api/users -> get all users
    get: {
        recipeByID: async (recipeID) => {
            return await modelController.findByPk(Recipe, recipeID, true);
        }
    },
    post: {
        createRecipe: async (profileID, name, description, ingredients) => {
            let params = {
                profileID: profileID,
                name: name,
                description: description,
                ingredients: ingredients
            }
            return await modelController.create(Recipe, params);
        },
        addRecipeImage: async (recipeID, imageID) => {
            let params = {
                recipeID: recipeID,
                imageID: imageID
            }
            let recipeImage = await modelController.create(RecipeImage, params);
            return recipeImage;
        },
    }
}