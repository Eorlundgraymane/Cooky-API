import express from 'express';
import imageServices from '../../../backend/services/imageServices.js';
const router = express.Router();

router.post('/', async (req, res) => {
    let userID = req.body.userID;
    let imageURL = req.body.imageURL;
    let category = req.body.category;
    let imageXrefID = await imageServices.post.createImage(userID, imageURL, category);
    res.send(imageXrefID);
});
router.get('/', async (req, res) => {
    let imageID = req.body.imageID;
    res.send(await imageServices.get.imageByID(imageID));
});

export default router;