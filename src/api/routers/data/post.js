import express from 'express';
const router = express.Router();
import postServices from '../../../backend/services/postServices.js';

const errorHandler = (err, req, res) => {
    console.log(err);
    res.status(500).json(err);
}

router.post('/like', async (req, res) => {
    try {
        let postID = req.body.postID;
        let profileID = req.body.profileID;
        let post = await postServices.post.likePost(postID,profileID);
        res.send(post);
    }
    catch (err) {
        errorHandler(err, req, res);
    }
});
router.get('/', async (req, res) => {
    try {
        let postID = req.query.id;
        let post = await postServices.get.postByID(postID);
        res.send(post);
    }
    catch (err) {
        errorHandler(err, req, res);
    }
});

export default router;