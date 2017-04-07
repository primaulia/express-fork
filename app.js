var express = require('express')
var app = express()
var port = 8080

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

app.get('/people/:string', function (req, res) {
  console.log('req.params are', req.params)
  console.log('retrieve people with string', req.params.string)
  var output = req.params.string.toUpperCase()
  var html = '<html><h1>' + output + '</h1></html>'
  res.send(html)
})

app.get('/capitalize/:string', function (req, res) {
  console.log('req.params are', req.params)
  console.log('retrieve people with string', req.params.string)
  var output = req.params.string.toUpperCase()
  var html = '<html><h1>' + output + '</h1></html>'
  res.send(html)
})

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
