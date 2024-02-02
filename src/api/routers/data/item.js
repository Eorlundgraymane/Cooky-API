import express from 'express';
const router = express.Router();
import itemController from '../../controllers/itemController';

router.post("/image", itemController.post.addItemImage(req, res));
router.post("/", itemController.post.createItem(req, res));
router.get('/', itemController.get.itemByID(req, res));

export default router;