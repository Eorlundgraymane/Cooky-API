import express from 'express';
const router = express.Router();
import userController from '../../controllers/userController.js';

router.post('/', userController.post.createUser(req, res));

router.get('/', userController.get.userByID(req, res));


export default router;