const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const users = require('./routes/User')
const workers = require('./routes/Worker')
const PORT = process.env.PORT || 3001
dotenv.config()

mongoose
  .connect(
    `mongodb+srv://root:${process.env.DB_PASSWORD}@cluster0.pcfkc2h.mongodb.net/?retryWrites=true&w=majority`,
  )
  .then(console.log('MongoDB Connected'))

const app = express()
app.use(express.json())
app.use('/users', users)
app.use('/workers', workers)

app.get('/api', (req, res) => {
  res.send('Hello from server !')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
