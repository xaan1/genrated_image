

import User from '../models/usermodel.js';

import bcrypt from "bcrypt"


import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    try {


        const { email, name, password } = req.body;


        if(!email || !name || !password) {
            return res.status(400).send('Please provide all fields');
        }

        const userExists = await User.findOne({email})


        if(userExists) {
            return res.status(400).send('User already exists');
        }


        const salt = await bcrypt.genSalt(10);


        const hashedPassword = await bcrypt.hash(password, salt);


        const user = await User.create({email, name, password: hashedPassword});

        return res.status(201).json({
            massage : 'User created successfully',
            success : true,
            user
        });


        // Add your logic here
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering user');
    }
};


export const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).send('Please provide all fields');
        }

        const user = await User.findOne({email});

        if(!user) {
            return res.status(400).send('User does not exist');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res.status(400).send('Invalid credentials');
        }


        const token = jwt.sign({
            id: user._id
        }, 'secret', {expiresIn: '1h' });
    
        return res.status(200).json({
            massage : 'User logged in successfully',
            success : true,
            user,
            token
        });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error logging in user');
    }

}


export const getProfile = async (req, res) => {
    try {

        console.log(req.user);
        const user = await User.findById(req.user).select('-password');

        if(!user) {
            return res.status(400).send('User does not exist');
        }

        return res.status(200).json({
            success : true,
            user
        });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting user profile');
    }
}