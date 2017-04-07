var express = require('express')
var app = express()
var port = 3000

app.get('/', function (req, res) {
  res.send('hello maria')
})

app.get('/about', function (req, res) {
  res.send('about maria')
})

app.get('/faq', function (req, res) {
  res.send('faq maria')
})

app.get('/contact', function (req, res) {
  res.send('contact brian')
})

app.get('/services', function (req, res) {
  res.send('services brian')
})

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
