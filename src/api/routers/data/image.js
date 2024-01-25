import express from 'express';
import imageServices from '../../../backend/services/imageServices.js';
const router = express.Router();


router.post('/profile', async (req, res) => {
    let profileID = req.body.profileID;
    let imageID = req.body.imageID;
    let imageXrefID = await imageServices.post.addProfileImage(profileID, imageID);
    res.send(imageXrefID);
});
router.post('/post', async (req, res) => {
    let postID = req.body.postID;
    let imageID = req.body.imageID;
    let imageXrefID = await imageServices.post.addPostImage(postID, imageID);
    res.send(imageXrefID);
});
router.post('/comment', async (req, res) => {
    let commentID = req.body.commentID;
    let imageID = req.body.imageID;
    let imageXrefID = await imageServices.post.addCommentImage(commentID, imageID);
    res.send(imageXrefID);
});
router.post('/recipe', async (req, res) => {
    let recipeID = req.body.recipeID;
    let imageID = req.body.imageID;
    let imageXrefID = await imageServices.post.addRecipeImage(recipeID, imageID);
    res.send(imageXrefID);
});
router.post('/item', async (req, res) => {
    let itemID = req.body.itemID;
    let imageID = req.body.imageID;
    let imageXrefID = await imageServices.post.addItemImage(itemID, imageID, category);
    res.send(imageXrefID);
});
router.post('/', async (req, res) => {
    let userID = req.body.userID;
    let imageURL = req.body.imageURL;
    let category = req.body.category;
    let imageXrefID = await imageServices.post.createImage(userID, imageURL, category);
    res.send(imageXrefID);
});
router.get('/profile', async (req, res) => {
    let profileID = req.body.profileID;
    res.send(await imageServices.get.imageByProfileID(profileID));
});
router.get('/', async (req, res) => {
    let imageID = req.body.imageID;
    res.send(await imageServices.get.imageByID(imageID));
});

export default router;