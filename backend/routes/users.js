const router = require('express').Router()
const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const {findOne} = require('mongoose')
const jwt = require('jsonwebtoken')

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


router.post('/createFriend', async (req, res, next) => {
    try {
        // const UserDB = await User.findOne({email: req.body.email}) //restrict login to email, not username
        // const friendAddition = {name: req.name, location: req.location, timeOffset: 8}
        // UserDB.friends = friendAddition
        UserDB.friends = {name: req.name, location: req.location, timeOffset: 8}
        await User.updateOne({email: req.body.email}, 
            {$set: {
                    friends: {name: req.name, location: req.location, timeOffset: 8}
                }
            })
        const UserDB = await User.findOne({email: req.body.email}) //restrict login to email, not username
        res.send(UserDB)
        
        // await UserDB.save()
        // .then(savedUserDB => {
        //     console.log(savedUserDB === UserDB)
        //     res.send(UserDB)
        //     // console.log(savedUserDB)
        // })
        // .catch(error => {
        //     res.status(500).json({message: error.message || error})
        // })
    } catch (error) {
        res.status(500).json({message: error.message || error})
    }
})


// router.put('/', verify, async (req,res,next) => { //in this, the user's password is sent to the router and then hashed then updated in DB.
//     //put more try-catches or if-else so that the errors are more specific
//     try {
//         const DBUser = await User.findOne({_id: req.user._id})
//         const currentDBHashedPassword = await DBUser.password
//         if(await bcrypt.compare(req.body.password, currentDBHashedPassword)) { //if the current password is correct
//             const newHashedPassword = await bcrypt.hash(req.body.newpassword, 10) //need newpassword property in the req body
//             const updatedUser = await User.findOneAndUpdate({_id: req.body._id}, {password: newHashedPassword}, {useFindAndModify: false, new: true}) //BUG
//                 //this also returns the document. with the option ({new: true}), it returns the doc after the update
//             if(await bcrypt.compare(req.body.newpassword, updatedUser.password)) {
//                 res.json({message: "Password successfully updated."})
//             }else{
//                 res.json({message: "The password has not been updated."})
//             }
//             next()
//         }
//     } catch (error) {
//         res.json({message: error.message || error})
//     }
// })


router.post('/deleteFriend')

//send _id of user, then modify friends' info.

module.exports = router