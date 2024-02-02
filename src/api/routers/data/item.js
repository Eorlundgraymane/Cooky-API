import express from 'express';
const router = express.Router();
import itemController from '../../controllers/itemController';

router.post("/image", (req,res) => itemController.post.addItemImage(req, res));
router.post("/", (req,res) => itemController.post.createItem(req, res));
router.get('/', (req,res) => itemController.get.itemByID(req, res));

export default router;