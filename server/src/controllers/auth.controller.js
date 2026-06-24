const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//register controller

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

    const hash = await bcrypt.hash(password, 10)

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
        id : registerUser._id,
        username : registerUser.username
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

//login controller

async function loginController(req,res){

    const { email, username , password } = req.body

    const loginUser = await userModel.findOne({ 
        $or: [{ username } , { email }] 
    }).select('+password')

    if(!loginUser){
        return res.status(404).json({
            'message' : 'user not found'
        })
    }

    const isPassword = await bcrypt.compare(password, loginUser.password)

    if(!isPassword){
        return res.status(401).json({
            'message' : 'Invalid password'
        })
    }

    const token = jwt.sign({
        id : loginUser._id,
        username : loginUser.username
    },
    process.env.JWT_SECRET, { expiresIn : '1h' }
    )

    res.cookie('jwt_token', token)

    res.status(200).json({
        name : loginUser.name,
        contact : loginUser.contact,
        email : loginUser.email,
        username : loginUser.username,
        bio : loginUser.bio,
        profilePic : loginUser.profilePic
    })

}

async function getMe(req, res){

    const userId = req.user.id

    const user = await userModel.findById(userId)

    res.status(200).json({
        message :'check details',
        name : user.name,
        email : user.email,
        username : user.username,
        bio : user.bio,
        profilePic : user.profilePic
    })

}


module.exports = { registerController , loginController , getMe}