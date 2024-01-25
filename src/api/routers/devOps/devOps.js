import express from 'express';
const router = express.Router();
import devOpsServices from '../../../backend/services/devOpsServices.js';

const errorHandler = (err, req, res) => {
    console.log(err);
    res.status(500).json(err);
}

router.get('/dbReset', async (req, res) => {
    try {
        res.send(await devOpsServices.get.dbReset());
    }
    catch (err) {
        errorHandler(err, req, res);
    }

});


export default router;