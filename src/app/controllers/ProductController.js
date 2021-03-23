const Product = require('../models/Product')

const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')

class ProductController {
  // [GET] /product/:slug
  show (req, res, next) {

    Product.findOne({ slug: req.params.slug })
           .then(product => {
              res.render('products/show', {
                product: mongooseToObject(product)
              })
           })
           .catch(next)
  }
  // [POST] create
  create (req, res, next) {
    res.render('products/create')
  }
  // [POST] product/store
  store (req, res, next) {
    // res.json(req.body)

    const product = new Product(req.body)
    product.save()
           .then(() => res.redirect('/'))
           .catch(next)
  }

  // [GET] /products/:id/edit
  edit (req, res, next) {
    Product.findById(req.params.id)
          .then(product => res.render('products/edit' ,{
            product: mongooseToObject(product)
          }))
          .catch(next)
  }

  //[PUT] /products/:id

  update(req, res, next) {
    Product.updateOne({ _id: req.params.id}, req.body) 
           .then(() => res.redirect('/me/stored/products'))
           .catch(next)
  }
}

// GET: send request to server and send back to client,
// POST: send request to server and save the data ,
// PUT, PATCH, for edit the data, PUT edit full document, PATCH can edit each field
//DELETE, 

module.exports = new ProductController()
