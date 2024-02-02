import express from 'express';
import imageController from '../../controllers/imageController.js';
const router = express.Router();

router.post('/', (req,res) => imageController.post.createImage(req, res));
router.get('/', (req,res) => imageController.get.imageByID(req, res));

export default router;