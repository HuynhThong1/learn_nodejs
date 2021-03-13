
class NewsController {
  // [GET] /views
  index (req, res) {
    res.render('news')
  }
}

module.exports = new NewsController()
