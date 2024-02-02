import express from 'express';
const router = express.Router();
import recipeController from '../../controllers/recipeController.js';

router.post("/image", (req,res) => recipeController.post.addRecipeImages(req, res));
router.post("/", (req,res) => recipeController.post.createRecipe(req, res))

router.get('/', (req,res) => recipeController.get.recipeByID(req, res));

export default router;