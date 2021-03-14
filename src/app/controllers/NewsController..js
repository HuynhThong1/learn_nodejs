// const Product = require('../models/Product')

class NewsController {
  // [GET] /views
  index (req, res) {
    res.render('news')

    // Product.find({}, function (err, products) {
    //   if (!err) res.json(products)
    //   res.status(400).json({ error: 'ERROR!' })
    // })
  }
}

module.exports = new NewsController()
