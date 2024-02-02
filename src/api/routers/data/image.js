import express from 'express';
import imageController from '../../controllers/imageController.js';
const router = express.Router();

router.post('/', imageController.post.createImage(req, res));
router.get('/', imageController.get.imageByID(req, res));

export default router;