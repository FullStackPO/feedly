const express = require('express')
const { postController, getpostcontroller }  = require('../controllers/post.controller')
const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() })

const postRouter = express.Router()


postRouter.post('/', upload.single('image') ,postController)

postRouter.get('/', getpostcontroller)

module.exports = postRouter