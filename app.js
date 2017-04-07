var express = require('express')
var app = express()
var port = 4000

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

app.get('/callme/:name', function (req, res) {
  console.log(req.params)
  console.log(req.params.name)
  var html = '<html><h1>Hello ' + req.params.name + '</h1></html>'
  res.send(html)
})

app.get('/capitalize/:string', function (req, res) {
  console.log(req.params)
  console.log(req.params.string)
  var caps = req.params.string.toUpperCase()
  var html = '<html><h1>Hello ' + caps +'  </h1></html>'
  res.send(html)
})

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
