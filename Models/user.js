import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        unique: true,
        type: String,
        required: true
    },
    password: {
        required: true,
        type: String
    }, 
    role: {
        type: String,
        default: "user",
    },
    contact: {
        type: String
    }

}, {timeseries: true});

//export const User = mongoose.model("users", userSchema);

// Create the User model
export const User = mongoose.model('User', userSchema);

//module.exports = User;

