const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
  name: { type: String, required: true },
  details: String,
  picture: { 
    data: Buffer,
    contentType: String,
    encoding: String
  },
  added_date:{
    type: Date,
    default: Date.now
  }
})
itemSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
module.exports = mongoose.model('Item', itemSchema)