import express from 'express';
import { isAuthenticated } from '../middlewares/auth.js';
import { newTask, getMyTask, UpdateTask, deleteTask } from '../controllers/Task.js';

const router = express.Router();

router.post('/new', isAuthenticated, newTask);
router.get('/my', isAuthenticated, getMyTask);
router.route('/:id').put(isAuthenticated, UpdateTask).delete(isAuthenticated, deleteTask);



export default router;