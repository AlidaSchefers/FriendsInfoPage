const express = require('express')
const server = express()
const usersRouter = require('./routes/users')
require('dotenv').config()
const databaseConnect = require('./databaseConnect')
const CORs = require('cors')

databaseConnect()
server.use(CORs({
    origin: ['http://localhost:3000'] //allows only my frontend server to connect with backend server
}))

// const friendsInfoAPIRouter = require('./routes/friendsInfoAPI')
// server.use('/getFriendsInfoTimeZone', friendsInfoAPIRouter)

// const testEnvAccessRouter = require('./routes/testenvaccess')
// server.use('/test', testEnvAccessRouter)

server.use(express.json()) //expect that every request potentially have JSON. All routes, just parse the body expecting it to be JSON.
//just parses when it has data from req

server.use('/users', usersRouter)

const port = 4000
//what's the point of listening?
server.listen(port, () => { //use 4000 for backend and 3000 for frontend. Why?
    console.log(`Listening on port ${port}`)
    console.log(`ORs-enabled webserver running on port ${port}`)
    // console.log(new Date()) //why does this not show my time? but it does in middleware/calctimezone ?
}) 