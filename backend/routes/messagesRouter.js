import express from 'express'
const messageRouter = express.Router()
import { PostMessage } from '../controller/messagesControllers.js'

messageRouter.post('/', PostMessage)

export default messageRouter
