const mongoose = require('mongoose')

const followSchema = new mongoose.Schema({

    follower : {
        type : String,
        trim : true
    },

    followee : {
        type : String,
        trim : true
    }

}, {timestamps : true})

followSchema.index({ follower : 1 , followee : 1 }, {unique : true})

const followModel = mongoose.model("follows", followSchema)

module.exports = followModel