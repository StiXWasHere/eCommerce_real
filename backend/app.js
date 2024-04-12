import express from 'express'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

import router from './routes/routes.js'
import messageRouter from './routes/messagesRouter.js'

app.use('/api/products', router)
app.use('/api/messages', messageRouter)

export default app