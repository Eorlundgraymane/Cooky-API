import express from 'express';
const router = express.Router();
import roleServices from '../../../backend/services/roleServices.js';

const errorHandler = (err, req, res) => {
    console.log(err);
    res.status(500).json(err);
}

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        let title = req.body.title;
        let grade = req.body.grade;
        let level = req.body.level;
        res.send(await roleServices.post.createRole(title, grade, level));
    }
    catch (err) {
        errorHandler(err, req, res);
    }

});

router.get('/', async (req, res) => {
    try {
        console.log(req.query);
        res.send(await roleServices.get.roleByID(req.query.id));
    }
    catch (err) {
        errorHandler(err, req, res);
    }

});


export default router;