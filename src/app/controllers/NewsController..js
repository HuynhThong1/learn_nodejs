
class NewsController {
  // [GET] /views
  index (req, res) {
    res.render('news')
  }

  show (req, res) {
    res.show('New Details')
  }
}

module.exports = new NewsController()
