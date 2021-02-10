const router = require('express').Router()
const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const {findOne} = require('mongoose')
const jwt = require('jsonwebtoken')
const verify = require('../middleware/verifyToken')

require('dotenv').config()

router.use(express.json())
const friendsInfoAPIRouter = require('./friendsInfoAPI')
router.use('/getFriendsInfo', friendsInfoAPIRouter)

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
            const token = jwt.sign({"_id": UserDB._id}, process.env.JWT_SECRET_KEY)
            res.status(200).send(token)
            // res.status(200).json(UserDB)
        }else{
            res.status(500).json("Invalid credentials")
        }
    } catch (error) {
        res.status(500).json({message: error.message || error})
    }
})


router.post('/createFriend', verify, async (req, res, next) => {
    try {
        let UserDB = await User.findOne({_id: req.user._id}) //restrict login to email, not username
        //adds a new friend
        UserDB.friends = [...UserDB.friends, {name: req.body.name, location: req.body.location, timeOffset: 8}] //now we need to do the timezoneAPI before friend assignment!
        await UserDB.save()
        res.send(UserDB)
        // .then(savedUserDB => {
        //     console.log(savedUserDB === UserDB)
        //     res.send(savedUserDB)
        //     // console.log(savedUserDB)
        // })
        // .catch(error => {
        //     res.status(500).json({message: error.message || error})
        // })
    } catch (error) {
        res.status(500).json({message: error.message || error})
    }
})

router.post('/deleteFriend', verify, async (req, res, next) => {
    try {
        let UserDB = await User.findOne({_id: req.user._id}) //req.user is defined by the verify middleware just before this arrow function
        UserDB.friends = UserDB.friends.filter(friend => friend.name != req.body.name)
        await UserDB.save()
        res.send(UserDB)
    } catch (error) {
        res.status(500).json({message: error.message || error})
    }
})

//send _id of user, then modify friends' info.

module.exports = router