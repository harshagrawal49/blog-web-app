import userModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/index.js"
import { createError } from "../utils/index.js";
import jwt from "jsonwebtoken"

export const signin = async (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return next(createError(400, "Username and password are required"));
    }

    try {
        const validUser = await userModel.findOne({ username });
        if (!validUser) {
            return next(createError(404, "User not found"));
        }

        const passCheck = await bcryptjs.compare(password, validUser.password);
        if (!passCheck) {
            return next(createError(401, "Invalid password"));
        }
        const token = jwt.sign({id:validUser._id},'harshsecret') // If user is valid and password matches
        console.log(token)
        ///const {password , ...rest} = req.body;
        res.status(200).cookie('access token',token).json(username);

    } catch (err) {
        console.error("Error during sign-in:", err);
        next(createError(500, "Internal server error"));
    }
};
