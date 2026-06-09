const imageKit = require('@imagekit/nodejs')
const { toFile } = require('@imagekit/nodejs')
const jwt = require('jsonwebtoken')
const postModel = require('../models/posts.model')

const imagekit = new imageKit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY
})

async function postController(req,res){
    console.log(req.body, req.file);

    const token = req.cookies.jwt_token

    if(!token){
        return res.status(401).json({
            'message' : 'Invalid user token, unauthorized access'
        })
    }

    let decoded = null;

    try{
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    }
    catch(err){
        return res.status(401).json({
            'message' : 'unauthorized access'
        })  
    }

    console.log(decoded)

    const file = await imagekit.files.upload({
        file : await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName : 'Test',
        folder : 'Feedly'
    })

    const post = await postModel.create({
        caption : req.body.caption,
        image : file.url,
        user : decoded.id
    })

    res.status(201).json({
        'message' : 'post created successfully',
        post
    })
}

module.exports = postController