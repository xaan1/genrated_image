
import express from 'express';
import { registerUser } from '../controller/userController.js';


const router = express.Router();







router.get('/',    registerUser )


export default router;