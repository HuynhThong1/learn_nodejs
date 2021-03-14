// const Product = require('../models/Product')

class SiteController {
  // [GET] /views
  index (req, res) {
    res.render('news')
  }

  search (req, res) {
    res.render('search')
  }
}

module.exports = new SiteController()
