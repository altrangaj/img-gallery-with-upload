
const Item = require('../models/item')
require('express-async-errors')

const itemController = {
  add: async (request, response) => {
    console.log(request.file)
    console.log('params:', request.params)
    console.log('body:', request.body)
    const item = new Item({
      picture: { 
        data: request.file.buffer,
        contentType: request.file.mimetype,
        encoding: request.file.encoding
      },
      ...request.body
    })
    const newItem = await item.save()
    console.log(newItem)
    response.status(200).send(newItem.toJSON().id)
  },
  getAll: async (_request, response) => {
    const data = await Item.find({})
    console.log(data)
    response.contentType('json')
    const items = data.map(ch => ch.toJSON())
    response.json({ items }) 
  },
  getItem: async (request, response) => {
    const item = await Item.findById(request.params.id)
    
    response.json(item.toJSON()) 
  },
  update: async (request, response) => {
    const item = await Item.findByIdAndUpdate(request.params.id, request.body, {new: true})
    response.json(item.toJSON()) 
  },
  delete:async (request, response) => {
    await Item.findByIdAndRemove(request.params.id)
    response.status(200).send()
  },
}
module.exports = itemController