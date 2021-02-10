const mongoose = require('mongoose')

const FriendSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    location: {type: String, required: true},
    timeOffset: {type: String}
})

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, minlength: 3, maxlength: 25},
    email: {type: String, required: true},
    password: {type: String, required: true, minlength: 3, maxlength: 100},
    friends: [FriendSchema]
})

module.exports = mongoose.model('user', UserSchema)