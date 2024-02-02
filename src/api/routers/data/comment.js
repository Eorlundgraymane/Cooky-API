import express from 'express';
const router = express.Router();
import commentController from '../../controllers/commentController.js';

router.post('/like', (req,res) => commentController.post.likeComment(req, res));
router.delete('/like', (req,res) => commentController.delete.unlikeComment(req, res));
router.post('/image', (req,res) => commentController.post.addCommentImage(req, res));
router.post('/', (req,res) => commentController.post.createComment(req, res));
router.get('/', (req,res) => commentController.get.commentByID(req, res));
export default router;