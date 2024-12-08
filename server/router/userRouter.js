
import express from 'express';
import { getProfile, loginUser, registerUser } from '../controller/userController.js';
import { AuthUser } from '../middeleweres/AuthUser.js';


const router = express.Router();







router.post('/registrar',    registerUser )

router.post('/login',    loginUser )

router.get('/profile',   AuthUser,  getProfile)


export default router;