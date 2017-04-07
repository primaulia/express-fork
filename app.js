var express = require('express')
var app = express()
var port = 5000

app.get('/', function (req, res) {
  res.send('hello brian')
})

app.get('/about', function (req, res) {
  res.send('about brian')
})

app.get('/faq', function (req, res) {
  res.send('faq brian')
})

app.get('/questions', function (req, res) {
  res.send('faq brian')
})

app.get('/contact', function (req, res) {
  res.send('faq brian')
})

app.get('/capitalize/:string', function (req, res) {
  res.send(req.params.string.toUpperCase())
})

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
