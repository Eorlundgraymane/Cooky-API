import express from 'express';
const router = express.Router();
import profileServices from '../../../backend/services/profileServices.js';

const errorHandler = (err, req, res) => {
    console.log(err);
    res.status(500).json(err);
}

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        let dob = new Date(req.body.dob);        
        let userID = req.body.userID;
        res.send(await profileServices.post.createProfile(dob, userID));
    }
    catch (err) {        
        console.log(dob);
        errorHandler(err, req, res);
    }

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