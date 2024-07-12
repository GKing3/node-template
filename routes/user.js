import express from 'express';
import userControllers from '../controllers/user.js';

const router = express.Router();


// routes

// Registers a new user
router.post('/register', userControllers.register);

// Logs in an existing user
router.post('/login', userControllers.login);

// Logout user
router.post('/logout', userControllers.logout);

export default router;
