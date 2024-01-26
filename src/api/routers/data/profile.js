import express from 'express';
const router = express.Router();
import profileServices from '../../../backend/services/profileServices.js';

const errorHandler = (err, req, res) => {
    console.log(err);
    res.status(500).json(err);
}
router.post('/image', async (req, res) => {
    let profileID = req.body.profileID;
    let imageID = req.body.imageID;
    let imageXrefID = await profileServices.post.addProfileImage(profileID, imageID);
    res.send(imageXrefID);
});

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        let dob = new Date(req.body.dob);
        console.log(dob);
        let userID = req.body.userID;
        res.send(await profileServices.post.createProfile(dob, userID));
    }
    catch (err) {        
        errorHandler(err, req, res);
    }

});
router.get('/image', async (req, res) => {
    let profileID = req.body.profileID;
    res.send(await profileServices.get.imageByProfileID(profileID));
});
router.get('/', async (req, res) => {
    try {
        console.log(req.query);
        res.send(await profileServices.get.profileByID(req.query.id));
    }
    catch (err) {
        errorHandler(err, req, res);
    }

});


export default router;