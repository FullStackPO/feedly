const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true,
        trim : true
    },

    contact : {
        type : Number,
        required : true,
        trim : true
    },

    email : {
        type : String,
        unique : [true, "Email already in use."],
        required : true,
        trim : true
    },

    username : {
        type : String,
        unique : [true, "Username already in use."],
        required : true,
        trim : true
    },

    bio : String,

    profilePic : {
        type : String,
        default : ""
    }

}, ({timestamps : true}))

const userModel = mongoose.model('users', userSchema)

module.exports = userModel