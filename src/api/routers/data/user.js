import express from 'express';
const router = express.Router();
import userServices from '../../../backend/services/userServices.js';

const errorHandler = (err, req, res) => {
    console.log(err);
    res.status(500).json(err);
}

router.post('/post', async (req, res) => {
    try {
        console.log(req.body);
        let userID = req.body.userID;
        let profileID = req.body.profileID;
        let text = req.body.text;
        res.send(await userServices.post.createPost(userID, profileID, text));
    }
    catch (err) {
        errorHandler(err, req, res);
    }

});
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        let email = req.body.email;
        let username = req.body.username;
        let password = req.body.password;
        res.send(await userServices.post.createUser(email, username, password));
    }
    catch (err) {
        errorHandler(err, req, res);
    }

});

router.get('/', async (req, res) => {
    try {
        console.log(req.query);
        res.send(await userServices.get.userByID(req.query.id));
    }
    catch (err) {
        errorHandler(err, req, res);
    }

});


export default router;