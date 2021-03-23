const Product = require('../models/Product')

const {multipleMongooseToObject} = require('../../util/mongoose')

class SiteController {
  // [GET] /views
  index (req, res, next) {
    Product.find({})
      .then(products => {
        res.render('home', {
          products: multipleMongooseToObject(products)
        })
      })
      .catch(next)
  }

  search (req, res) {
    res.render('search')
  }
}

module.exports = new SiteController()
