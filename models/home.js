var mongoose = require('mongoose')

var homeSchema = new mongoose.Schema({
  address: String,
  sqft: Number,
  bedroomsNum: Number,
  bathsNum: Number,
  price: Number
})

var Arrowhead = mongoose.model('Arrowhead', homeSchema)

module.exports = Arrowhead
