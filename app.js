var express = require('express')
var app = express()
var port = 8080

app.get('/', function (req, res) {
  var html = '<html><body><h1>Hello</h1></body></html>'
  res.send(html)
})

app.get('/about', function (req, res) {
  console.log(req.params)
  res.send('about brian')
})

app.get('/faq', function (req, res) {
  res.send('faq brian')
})

// Wildcard
app.get('/people/*', function (req, res) {
  console.log(req.params)
  console.log(req.params['0'])
  var html = '<html><body><h1>' + req.params['0'] + '</h1></body></html>'
  res.send(html)
})

app.get('/capitalize/:string', function (req, res) {
  console.log(req.params)
  console.log(req.params.string)
  var output = req.params.string.toUpperCase()
  var html = '<html><body><h1>' + output + '</h1></body></html>'
  res.send(html)
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
