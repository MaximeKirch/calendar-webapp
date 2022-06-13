const mongoose = require('mongoose')

const schema = mongoose.Schema({
    firstname: String,
    lastname:String,
    address:String,
    location:String,
    zip: String,
    favorites:String,
    bio:String,
    picture:String
})

module.exports = mongoose.model('user', schema)