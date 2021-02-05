const express = require('express')
const server = express()
const usersRouter = require('./routes/users')
const mongoose = require('mongoose')
require('dotenv').config()

server.use(express.json()) //expect that every request potentially have JSON. All routes, just parse the body expecting it to be JSON.
//just parses when it has data from req

server.use('/users', usersRouter)

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.on('open', () => {
    console.log('connected to database')
})
mongoose.connection.on('connected', () => {
    console.log('connecting to database')
})

//what's the point of listening?
server.listen(8080, () => { //use 4000 for backend and 3000 for frontend. Why?
    console.log('Listening on port 8080')
}) 