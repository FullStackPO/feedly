const express = require('express')
const { postController, getpostcontroller, getpostDetailscontroller }  = require('../controllers/post.controller')
const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() })

const postRouter = express.Router()


postRouter.post('/', upload.single('image') ,postController)

postRouter.get('/', getpostcontroller)

postRouter.get('/details/:postId', getpostDetailscontroller)

module.exports = postRouter