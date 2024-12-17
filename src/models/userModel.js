import mongoose from 'mongoose'
import { type } from 'os';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true , "Please provde an username "],
        unique: true
    },

    email: {
        type: String,
        required: [true , "Please provde an email "],
        unique: true
    },

    password: {
        type: String,
        required: [true , "Please provde an password "],
    },

    isVerified:{
        type: Boolean,
        default: false
    },

    isAdmin:{
        type: Boolean,
        default: false
    },
    
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifiedToken:String,
    verifiedTokenExpiry:Date,

})

const User =  mongoose.models.users || mongoose.model
("users", userSchema)

export default User;