const express = require('express')
const server = express()
const usersRouter = require('./routes/users')
require('dotenv').config()
const databaseConnect = require('./databaseConnect')

databaseConnect()

// const friendsInfoAPIRouter = require('./routes/friendsInfoAPI')
// server.use('/getFriendsInfoTimeZone', friendsInfoAPIRouter)

// const testEnvAccessRouter = require('./routes/testenvaccess')
// server.use('/test', testEnvAccessRouter)

server.use(express.json()) //expect that every request potentially have JSON. All routes, just parse the body expecting it to be JSON.
//just parses when it has data from req

server.use('/users', usersRouter)


//what's the point of listening?
server.listen(4000, () => { //use 4000 for backend and 3000 for frontend. Why?
    console.log('Listening on port 4000')
    // console.log(new Date()) //why does this not show my time? but it does in middleware/calctimezone ?
}) 