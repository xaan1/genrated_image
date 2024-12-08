
import fs from "fs"
import FormData from "form-data"
import axios from "axios"
import User from "../models/usermodel.js";

export const textToImage = async (req, res) => {


    try {

        const userId =   await   req.user;

        console.log(userId , "userId");

   

    

        const user =   await User.findOne({ _id: userId })

        console.log(user , "user");





        if(!user) {
            return res.status(400).send('User not found');
        }


        if (user.creditBalance === 0)
            return res.status(400).json({ success: false, message: "No credit balance", creditBalance: user.creditBalance });


        const { prompt } = req.body;

        console.log(prompt , "text");

        console.log(req.body , "req.body");



        const form = new FormData();


        form.append('prompt', prompt);


        const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', form, {
            headers: {
                ...form.getHeaders(),
                "x-api-key": "dc4ef1f0ac2011dffd8df82bf1135e7a3b01ebd3eae0ac1f66992c3aca45c7f01259d8e1737949625ff082b68bad8951"

            },
            responseType: "arraybuffer"
        });

        console.log(data , "data");


        await User.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 });

       

        const base64 = Buffer.from(data, "binary").toString("base64");
        const resultingImg = `data:image/png;base64,${base64}`;


        res.json({ image: resultingImg  , creditBalance: user.creditBalance - 1 , success: true });




      



    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }

}