const imageKit = require('@imagekit/nodejs')
const { toFile } = require('@imagekit/nodejs')
const likeModel = require('../models/like.model')
const postModel = require('../models/posts.model')

const imagekit = new imageKit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY
})

async function postController(req,res){

    const file = await imagekit.files.upload({
        file : await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName : 'Test',
        folder : 'Feedly'
    })

    const post = await postModel.create({
        caption : req.body.caption,
        image : file.url,
        user : req.user.id
    })

    res.status(201).json({
        'message' : 'post created successfully',
        post
    })
}

async function getpostcontroller(req,res){

    const userId = req.user.id

    const posts = await postModel.find({
        user : userId
    })

    res.status(200).json({
        message : 'loading all posts',
        posts
    })
}


async function getpostDetailscontroller(req,res){

    const userId = req.user.id
    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if(!post){
        return res.status(404).json({
            message : 'Post Not Found.'
        })
    }

    const validUser = post.user.toString() === userId

    if(!validUser){
        return res.status(403).json({
            message : 'Forbidden Content'
        })
    }

    res.status(200).json({
        message : 'Data Fetch Successfully',
        post
    })

} 

async function likepostController(req,res){

    const username = req.user.username
    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if(!post){
        return res.status(404).json({
            message : 'post not found'
        })
    }

    const like = await likeModel.create({
        post : postId,
        user : username
    })

    res.status(200).json({
        message : 'post like successfully',
        like
    })

}

async function getFeedController(req, res) {
    const user = req.user

    const posts = await postModel.find({}).sort({ _id: -1 }).populate("user").lean()

    const updatedPosts = await Promise.all(
        posts.map(async (post) => {
            const isLiked = await likeModel.findOne({
                user: user.username,
                post: post._id
            })

            post.isLiked = Boolean(isLiked) //or we can also write !!isLiked
            return post
        })
    )

    res.status(200).json({
        message: "All posts fetched",
        posts: updatedPosts
    })
}

module.exports = { postController , getpostcontroller , getpostDetailscontroller , likepostController , getFeedController}