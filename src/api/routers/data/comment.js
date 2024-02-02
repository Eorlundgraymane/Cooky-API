import express from 'express';
const router = express.Router();
import commentController from '../../controllers/commentController.js';

router.post('/like', commentController.post.likeComment(req, res));
router.delete('/like', commentController.delete.unlikeComment(req, res));
router.post('/image', commentController.post.addCommentImage(req, res));
router.post('/', commentController.post.createComment(req, res));
router.get('/', commentController.get.commentByID(req, res));
export default router;