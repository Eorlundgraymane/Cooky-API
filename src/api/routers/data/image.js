import express from 'express';
const router = express.Router();

router.use('/', (req, res) => {
    res.send("Image API Online");
});

export default router;