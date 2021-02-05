const router = require('express').Router()
const User = require('../models/User')

router.post('/signup', async (req, res, next) => {
    try {
        console.log(req.body)
        const newUser = await User.create(req.body)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({message: error.message || error})
    }
    // res.body.username = User
    // req.body.password = await bcrypt.hash(req.body.password, 10)
})

module.exports = router