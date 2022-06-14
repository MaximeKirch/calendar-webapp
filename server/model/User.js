const mongoose = require('mongoose')

const schema = mongoose.Schema({
    firstname: {type: String, required: true},
    lastname:{type: String, required: true},
    email:{type : String, required: true},
    password: {type: String, select : false,  required: true},
    address:{type: String, required: true},
    location:{type: String, required: true},
    zip: {type: String, required: true},
    favorites:{type: String, required: true},
    bio:{type: String, required: false},
    picture:{type: String, required: false},
    appointments : [
        {
            futures : [{
                "date" : String,
                "hour" : String,
                "idWorker" : String,
                "idUser" : String
            }], 
            pasts : [{
                "date" : String,
                "hour" : String,
                "idWorker" : String,
                "idUser" : String
            }]
        }
      ]
})

module.exports = mongoose.model('user', schema)