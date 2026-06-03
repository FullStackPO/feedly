const userModel = require('../models/user.model')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

async function registerController(req,res){

    const { name, contact, email, username, password, bio, profilePic } = req.body

    const existingUser = await userModel.findOne({
        $or: [{ email }, { username }]
    });

    if (existingUser) {
    return res.status(409).json({
        message : existingUser.email === email ? 'Email already in use.' : 'Username already exists.'
    });
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex')

    const registerUser = await userModel.create({ 
        name, 
        contact, 
        email, 
        username, 
        password : hash, 
        bio, 
        profilePic 
    })

    const token = jwt.sign({
        id : registerUser._id
    },
    process.env.JWT_SECRET,
    {expiresIn : '1h'}
    )

    res.cookie('jwt_token', token)

    res.status(201).json({
        name : registerUser.name,
        contact : registerUser.contact,
        email : registerUser.email,
        username : registerUser.username,
        bio : registerUser.bio, 
        profilePic : registerUser.profilePic
    })

}

module.exports = registerController