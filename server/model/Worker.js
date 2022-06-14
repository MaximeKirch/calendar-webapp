const mongoose = require('mongoose')

const schema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email : {type: String, required: true},
  password: {type:String, select: false, required: true},
  birthdate: {type:String, select: false, required: false},
  location: { type: String, required: true },
  address: { type: String, required: true },
  zip: { type: String, required: true },
  profilepicture: { type: String, required: false },
  sector: { type: String, required: true },
  bio: { type: String, required: true },
  openingHours: [
    {
      morning: {
        open: { type: String, required: true },
        close: { type: String, required: true },
      },
      afternoon : {
        open:{type:String, required: true},
        close: {type: String, required:true}
      }
    },
  ],
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

module.exports = mongoose.model('worker', schema)
