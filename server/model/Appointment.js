const mongoose = require('mongoose')

const schema = mongoose.Schema({
    date: String,
    hour: String,
    idUser : String,
    idWorker: String
})


module.exports = mongoose.model('appointment', schema)