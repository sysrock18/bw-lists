const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listSchema = new Schema({
  id: { type: String },
  eventType: { type: String },
  destination: { type: String },
  date: { type: Date }
}, { versionKey: false })

const List = mongoose.model('Lists', listSchema)

module.exports = List
