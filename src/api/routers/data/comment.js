import express from 'express';
const router = express.Router();
import commentServices from '../../../backend/services/commentServices.js';

const errorHandler = (err, req, res) => {
    console.log(err);
    res.status(500).json(err);
}

router.post('/like', async (req, res) => {
    try {
        let postID = req.body.postID;
        let profileID = req.body.profileID;
        let post = await commentServices.post.likeComment(postID, profileID);
        res.send(post);
    }
    catch (err) {
        errorHandler(err, req, res);
    }
});
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        let profileID = req.body.profileID;
        let postID = req.body.postID;
        let text = req.body.text;
        res.send(await commentServices.post.createComment(profileID, postID, text));
    }
    catch (err) {
        errorHandler(err, req, res);
    }

});
router.get('/', async (req, res) => {
    try {
        let postID = req.query.id;
        let post = await commentServices.get.commentByID(postID);
        res.send(post);
    }
    catch (err) {
        errorHandler(err, req, res);
    }
});
export default router;