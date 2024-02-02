import recipeServices from '../../backend/services/recipeServices.js';

export default {
    get: {
        recipeByID: async (req, res) => {
            let recipeID = req.body.recipeID;
            let recipe = await recipeServices.get.recipeByID(recipeID);
            res.send(recipe);
        }
    },
    post: {
        createRecipe: async (req, res) => {
            let profileID = req.body.profileID;
            let name = req.body.name;
            let description = req.body.description;
            let ingredients = req.body.ingredients;
            let recipe = await recipeServices.post.createRecipe(profileID, name, description, ingredients);
            res.send(recipe);
        },
        addRecipeImages: async (req, res) => {
            let recipeID = req.body.recipeID;
            let imageID = req.body.imageID;
            let recipe = await recipeServices.post.addRecipeImage(recipeID, imageID);
            res.send(recipe);
        }
    }
}