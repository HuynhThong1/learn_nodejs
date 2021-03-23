const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const Product = new Schema({
  name: { type: String , require: true},
  price: { type: Number , require: true},
  image: { type: String , require: true},
  slug: { type: String, slug: 'name', unique: true },
}, {
  timestamps: true,
})

module.exports = mongoose.model('Product', Product)
