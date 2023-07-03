import express from 'express';
import { RegisterUser, getAllUsers, login, getMyProfile, logout } from '../controllers/User.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.get('/all', getAllUsers);
router.post('/new', RegisterUser);
router.post('/login', login);
router.get('/logout', logout);



router.get('/me', isAuthenticated, getMyProfile);
export default router;