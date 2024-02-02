import express from 'express';
const router = express.Router();
import postController from '../../controllers/postController.js';

router.post('/like', (req,res) => postController.post.likePost(req, res));
router.post('/image', (req,res) => postController.post.addPostImage(req, res));
router.post('/', (req,res) => postController.post.createPost(req, res));

router.delete('/like', (req,res) => postController.delete.unlikePost(req, res));

router.get('/', (req,res) => postController.get.postByID(req, res));
export default router;