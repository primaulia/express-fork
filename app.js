var express = require('express')
var app = express()
var port = 3117

app.get('/', function (req, res) {
  res.send('Welcome to my humle abode')
})

app.get('/about', function (req, res) {
  res.send('about this humbe abode')
})

app.get('/contact', function (req, res) {
  res.send('contacting this humble abode')
})

app.get('/people/:email/:name', function (req, res) {
  console.log('req.params are', req.params)
  console.log('retrieve people with email' + req.params.email)
  var html = '<html><h1>Hello' + req.params.email + '</h1></html>'
  res.send(html)
})

app.get('/capitalize/:string', function (req, res) {
  var str = req.params
  var cap = str.toUpperCase()
  var html = '<html><h1>Hello' + cap + '</h1></html>'
  res.send(html)
})

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
