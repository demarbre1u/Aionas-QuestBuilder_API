import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

// Controllers
import auth from './controllers/auth'

// Config file
const config = require('./config.json')

const app = express()
const router = express.Router()

// Middlewares
app.use(cors())
app.use(bodyParser.json())

// Connection to MongoDB
mongoose.connect(config.mongoUrl)
const connection = mongoose.connection
connection.once('open', () => { console.log('Connected to MongoDB') })

// Login route
auth(router)

app.use('/', router)

app.listen(4000, () => console.log('Server is now running on port 4000') )