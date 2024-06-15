import mongoose from "mongoose";


const user = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true
    }, 
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true})

const userModel = mongoose.model('User',user)

export default userModel