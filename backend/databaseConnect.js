const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    
    mongoose.connection.on('connected', () => {
        console.log('connecting to database')
    })
    mongoose.connection.on('open', () => {
        console.log('connected to database')
    })
    mongoose.connection.on('error', (err) => {
        console.log(`ERROR: ${err}`)
    })
    mongoose.connection.on('disconnected', () => {
        console.log('The Application has been disconnected from the database')
    })
}
