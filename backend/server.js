import 'dotenv/config'
import app from './app.js'

import mongoose from 'mongoose'

const PORT = process.env.PORT || 9999
const mongoURI = 'mongodb+srv://fabiannilsson:bytmig123@cluster0.0gizja1.mongodb.net/Fabian?retryWrites=true&w=majority&appName=cluster0'

mongoose.connect(mongoURI)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database ', PORT))

app.listen(PORT, () => console.log('Server started'))