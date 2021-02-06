const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, minlength: 3, maxlength: 25},
    email: {type: String, required: true},
    password: {type: String, required: true, minlength: 3, maxlength: 100},
})

// friends: {} //and then we insert an object inside this empty object?
// friends: {type: mongoose.Schema.Types.ObjectId, ref: 'friend'} //for now, do not use.
//one to many relationship

//here, we only have one object in "friends".
//there doesn't seem to be a way to have an objects within objects for the friends.
//we could limit the number of friends and just have, say, 5 friend keys (Friend1, Friend2, etc)

//we could NOT have a friend key and then just add on as we they add friends. but add nums like friend1, friend2, friend3, etc
//should we limit the num of friends to 5 and then just add in 5 of the objects?

//put it in its own file
const FriendSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: false},
    location: {type: String, required: true},
    timezone: {type: String}
})

const Friend = mongoose.model('friend', FriendSchema)
//will this make a new collection in MongoDB?
//we can reference to other schemas
//article: https://stackabuse.com/mongoose-with-nodejs-object-data-modeling/

module.exports = mongoose.model('user', UserSchema)

//how do I deal with the friends key? do I made another model to put in there?

// name: {type: String, required: true},
// location: {type: String, required: true},
// timezone: {type: String}