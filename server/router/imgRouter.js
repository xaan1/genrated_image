
import express from 'express';
import upload from '../middeleweres/multer.js';
import { AuthUser } from '../middeleweres/AuthUser.js';
import { textToImage } from '../controller/imageController.js';


const imgRouter = express.Router();





imgRouter.post('/upload', upload.single('image'),  AuthUser , textToImage )
export default imgRouter;