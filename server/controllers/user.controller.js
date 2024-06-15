import mongoose from "mongoose";
import userModel from "../models/user.model.js";

const signup = async (req, res) => {
    const { username, email, password } = req.body;

    // Check if all required fields are provided
    if (!username || !email || !password) {
        return res.status(400).send("All fields are required");
    }

    try {
        // Create a new user
        await userModel.create({ username, email, password });
        return res.status(201).send("User added successfully");
    } catch (err) {
        // Check for specific error types (optional but recommended)
        if (err.code === 11000) { // Duplicate key error
            return res.status(409).send("User already exists");
        }

        return res.status(500).send(`Error creating user: ${err.message}`);
    }
};

export default signup;
