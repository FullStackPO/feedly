const express = require('express')
const { registerController, loginController, getMe } = require('../controllers/auth.controller')
const identifyUser = require('../middlewares/auth.middleware')

const authRouter = express.Router()

authRouter.post('/register', registerController)

authRouter.post('/login', loginController)

authRouter.get('/get-me', identifyUser , getMe)

module.exports = authRouter