const express = require('express')
const identifyUser = require('../middlewares/auth.middleware')
const { followUsers , unfollowUsers } = require('../controllers/user.controller')
const userRouter = express.Router()

userRouter.post('/follow/:username', identifyUser , followUsers)

userRouter.post('/unfollow/:username', identifyUser , unfollowUsers)

module.exports = userRouter