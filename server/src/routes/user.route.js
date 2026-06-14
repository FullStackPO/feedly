const express = require('express')
const identifyUser = require('../middlewares/auth.middleware')
const followUser = require('../controllers/user.controller')
const userRouter = express.Router()

userRouter.post('/follow/:username', identifyUser , followUser)

module.exports = userRouter