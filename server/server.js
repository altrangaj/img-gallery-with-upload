const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const itemRouter = require('./routes/itemRouter')
require('dotenv').config()
const cors = require('cors')

mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true })


console.log(process.env.NODE_ENV)
app.use(cors())
if(process.env.NODE_ENV === 'production') app.use(express.static('build'))
app.use(bodyParser.json())
app.use('/api',itemRouter)

app.listen(process.env.PORT, function() {
  console.log(`App running on port ${process.env.PORT}`)
})