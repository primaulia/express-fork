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

app.get('/people/:email', function (req, res) {
  console.log('req.params are', req.params)
  console.log('retrieve people with email' + req.params.email)
  var html = '<html><body><h1>Boo ' + req.params.email + '</h1></body></html>'
  res.send(html)
})

app.get('/capitalize/:string', function (req, res) {
  console.log('req.params are', req.params)
  console.log(req.params.string)
  var html = req.params.string.toUpperCase()
  res.send(html)
})

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
