
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './router/userRouter.js';


const app = express();






app.get('/', (req, res) => {
    res.send('Hello World');

})


app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://aasiyomaxmedapdi:f4tbzgf1rCTPsYzc@cluster0.ewjni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to MongoDB");
    }) .catch((error) => {
        console.log("Error: ", error);
    });





    // routers


    app.use('/api/users', router);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
})