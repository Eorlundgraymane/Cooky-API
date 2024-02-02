import express from 'express';
const router = express.Router();
import postController from '../../controllers/postController.js';

router.post('/like', postController.post.likePost(req, res));
router.post('/image', postController.post.addPostImage(req, res));
router.post('/', postController.post.createPost(req, res));

router.delete('/like', postController.delete.unlikePost(req, res));

router.get('/', postController.get.postByID(req, res));
export default router;