import mongoose from "mongoose";
import bcryptjs from "bcryptjs"
import userModel from "../models/user.model.js";

const signup = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).send("All fields are required");
    }

    try {
        // Check if the user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).send("User already exists");
        }

        // Hash the password asynchronously with a stronger salt
        const saltRounds = 10;
        const hashedPassword = await bcryptjs.hash(password, saltRounds);

        // Create the new user
        await userModel.create({ username, email, password: hashedPassword });
        return res.status(201).send("User added successfully");
    } catch (err) {
        return res.status(500).send(`Error creating user: ${err.message}`);
    }
};

export default signup;

