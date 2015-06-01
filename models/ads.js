var mongoose = require('mongoose'),
  Schema = mongoose.Schema

var Ads = new Schema({
  title: {
    type: String,
    trim: true,
  },
  url: String,
  created: {
    type: Date,
    default: Date.now
  },
  price: String,
  address: String,
  seller: String,
  make: String,
  model: String,
  kilometers: String,
  miles: String,
  vehicletype: String,
  transmission: String,
  color: String,
  drive: String,
  fuel: String,
  description: String,
  images: [],
  modified: Date
});

module.exports = mongoose.model('Ads', Ads);