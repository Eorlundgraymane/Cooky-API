import express from 'express';
const router = express.Router();

router.use('/', (req, res) => {
    res.send("Recipe API Online");
});

export default router;