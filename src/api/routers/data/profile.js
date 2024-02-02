import express from 'express';
const router = express.Router();
import profileController from '../../controllers/profileController.js';

router.post('/image', (req,res) => profileController.post.addProfileImage(req, res));
router.post('/', (req,res) => profileController.post.createProfile(req, res));

router.get('/image', (req,res) => profileController.get.imageByProfileID(req, res));
router.get('/', (req,res) => profileController.get.profileByID);


export default router;