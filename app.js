var express = require('express')
var app = express()
var port = 4000

app.set('view engine', 'ejs')

// This is where your routes start
app.get('/', function (req, res) {
  res.render('homepage')
})

app.get('/about', function (req, res) {
  res.render('about')
})

app.get('/faq', function (req, res) {
  res.render('faq')
})

app.get('/people/:email', function (req, res) {
  console.log('req.params are', req.params)
  console.log('retrieve people with email ' + req.params.name)
  var html = '<html><h1>Hello ' + req.params.name + '</h1></html>'
  res.send(html)
})

app.get('/capitalize/:string')

// This is where your routes end

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
