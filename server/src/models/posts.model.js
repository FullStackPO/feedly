const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

    caption : {
        type : String,
        default : ""
    },

    image : {
        type : String,
        required : [true, "Necessary to create a post"]
    },

    user : {
        ref : "users",
        userid : mongoose.Schema.Types.ObjectId,
        required : [true, "Important for creating a post"]
    }
})

const postModel = mongoose.model('posts', postSchema)

module.exports = postModel