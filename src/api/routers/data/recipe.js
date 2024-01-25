import express from 'express';
const router = express.Router();
import recipeServices from '../../../backend/services/recipeServices.js';

router.post("/", async (req, res) => {
    let profileID = req.body.profileID;
    let name = req.body.name;
    let description = req.body.description;
    let ingredients = req.body.ingredients;

    let recipe = await recipeServices.post.createRecipe(profileID, name, description, ingredients);
    res.send(recipe);
})
router.get('/', async (req, res) => {
    let recipeID = req.body.recipeID;

    let recipe = await recipeServices.get.recipeByID(recipeID);
    res.send(recipe);
});

export default router;