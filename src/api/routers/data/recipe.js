import express from 'express';
const router = express.Router();
import recipeController from '../../controllers/recipeController.js';

router.post("/image", recipeController.post.addRecipeImages(req, res));
router.post("/", recipeController.post.createRecipe(req, res))

router.get('/', recipeController.get.recipeByID(req, res));

export default router;