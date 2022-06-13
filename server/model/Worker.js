const mongoose = require('mongoose')

const schema = mongoose.Schema({
        firstname: {type: String, required: true},
        lastname: {type: String, required: true},
        location: {type: String, required: true},
        zip:{type: String, required: true},
        pic:{type: String, required: false},
        sector:{type: String, required: true},
        description: {type: String, required: true},
        openingHours : [{
            open:{type: String, required: true},
            close:{type:String, required: true}
        }]
})

module.exports = mongoose.model('worker', schema)