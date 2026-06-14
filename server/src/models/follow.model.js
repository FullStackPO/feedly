const mongoose = require('mongoose')

const followSchema = new mongoose.Schema({

    follower : {
        type : String,
        trim : true,
        required : [true, "follower is required."]
    },

    followee : {
        type : String,
        trim : true,
        required : [true, "followee is required."]
    }

}, {timestamps : true})

const followModel = mongoose.model("follows", followSchema)

module.exports = followModel