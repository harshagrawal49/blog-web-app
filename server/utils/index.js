import mongoose from "mongoose"

const MONGO = process.env.MONGO

export const dbConnect = async()=> {
    try{
        await mongoose.connect("mongodb+srv://harsh:harsh@cluster0.pwvcsl5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        //res.send("connected to db")
        console.log("connected to db")
    }
    catch(err){
        //res.send("error connecting db")
        console.log("error connecting db => " ,err)
    }
}

export const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
};

export const createError = (statusCode, message) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    return error;
};
