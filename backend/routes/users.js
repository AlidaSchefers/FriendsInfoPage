const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const {findOne} = require('mongoose')

require('dotenv').config()


const friendsInfoAPIRouter = require('./friendsInfoAPI')
router.use('/getFriendsInfoTimeZone', friendsInfoAPIRouter)

// console.log(`api key in users.js: ${process.env.AMDOREN_APIKEY}`)

router.post('/signup', async (req, res, next) => {
    try {
        // console.log(req.body)
        req.body.password = await bcrypt.hash(req.body.password, 10) 
        //currently the max length of the password is 100. that is for the unhashed and hashed password.
        const newUser = await User.create(req.body)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({message: error.message || error})
    }
})

router.post('/login', async (req, res, next) => { //should review when to use next ?
    try {
        const UserDB = await User.findOne({email: req.body.email}) //restrict login to email, not username
        console.log(UserDB)
        if(bcrypt.compare(req.body.password, UserDB.password)) {
            console.log("Good credentials")
            res.status(200).json(UserDB)
        }
    } catch (error) {
        res.status(500).json({message: error.message || error})
    }
})

module.exports = router