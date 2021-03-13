const newsRouter = require('./news')

function route (app) {
  app.get('/', (req, res) => {
    res.render('home')
  })
  app.use('/news', newsRouter)

  app.get('/search', (req, res) => {
    res.render('search')
  })
  app.post('/search', (req, res) => {
    // form-data .body
    console.log(req.body)
    res.send('')
  })
}

module.exports = route
