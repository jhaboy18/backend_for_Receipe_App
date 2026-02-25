// Routes/User.js
import express from 'express'
import { User } from '../Models/User.js'
import { login, profile, register } from '../controllers/User.js';
import { Authenticate } from '../Middleware/Auth.js';

const router = express.Router();

// register
router.post('/register', register );

//login

router.post('/login',login)

//profile

router.get('/user',Authenticate,profile)

export default router;