import express from 'express';
const router = express.Router();
import profileController from '../../controllers/profileController.js';

router.post('/image', profileController.post.addProfileImage(req, res));
router.post('/', profileController.post.createProfile(req, res));

router.get('/image', profileController.get.imageByProfileID(req, res));
router.get('/', profileController.get.profileByID);


export default router;