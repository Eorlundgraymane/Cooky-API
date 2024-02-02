import express from 'express';
const router = express.Router();
import userController from '../../controllers/userController.js';

router.post('/', (req,res) => userController.post.createUser(req, res));

router.get('/', (req,res) => userController.get.userByID(req, res));


export default router;