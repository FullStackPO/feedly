const express = require('express')
const { postController, getpostcontroller, getpostDetailscontroller, likepostController, getFeedController}  = require('../controllers/post.controller')
const multer = require('multer')
const identifyUser = require('../middlewares/auth.middleware')
const upload = multer({ storage: multer.memoryStorage() })

const postRouter = express.Router()


postRouter.post('/', upload.single('image') , identifyUser , postController)

postRouter.get('/' , identifyUser , getpostcontroller)

postRouter.get('/details/:postId', identifyUser , getpostDetailscontroller)

postRouter.post('/like/:postId', identifyUser , likepostController)

postRouter.get('/feed', identifyUser, getFeedController)

module.exports = postRouter