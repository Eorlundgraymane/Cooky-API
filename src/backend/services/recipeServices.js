import modelController from '../controllers/sequelizeController.js';
import Recipe from '../models/basic/recipe.js';

export default {
    // GET /api/users -> get all users
    get: {
        recipeByID: async (recipeID) => {
            return await modelController.findByPk(Recipe, recipeID, true, true);
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
        }
    }
}