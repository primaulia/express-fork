var express = require('express')
var app = express()
var port = 5000

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.sendFile('./homepage.html', { root: __dirname })
})

app.get('/about', function (req, res) {
  res.sendFile('./about.html', { root: __dirname })
})

app.get('/', function (req, res) {
  var html = '<html><body><h1>Hello World</h1></body></html>'
  res.send(html)
})


app.get('/', function (req, res) {
  res.send('hello brian')
})

app.get('/about', function (req, res) {
  res.send('about brian')
})

app.get('/faq', function (req, res) {
  res.send('faq brian')
})

app.get('/contact', function (req, res) {
  res.send('contact brian')
})

app.get('/services', function (req, res) {
  res.send('services brian')
})

app.get('/capitalize/:string')

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
