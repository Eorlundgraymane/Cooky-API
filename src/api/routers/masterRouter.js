import express from 'express';
const router = express.Router();

import devOpsRouter from './devOps/devOps.js';

import roleRouter from './auth/role.js';

import userRouter from './data/user.js';
import profileRouter from './data/profile.js';
import postRouter from './data/post.js';
import recipeRouter from './data/recipe.js';
import imageRouter from './data/image.js';

router.use('/user', userRouter);
router.use('/profile', profileRouter);
router.use('/post', postRouter);
router.use('/recipe', recipeRouter);
router.use('/image', imageRouter);
router.use('/role', roleRouter);
router.use('/devOps', devOpsRouter);

router.get('/', (req, res) => { res.send("API is Online!") });

export default router;