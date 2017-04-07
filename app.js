var express = require('express')
var app = express()
var port = 4000

app.get('/', function (req, res) {
  var html = '<html><body><h1>Hello World</h1></body></html>'
  res.send(html)
})

app.get('/about', function (req, res) {
  console.log(req.params)
  res.send('about brian')
})

app.get('/faq', function (req, res) {
  res.send('faq brian')
})

app.get('/people/:email', function (req, res) {
  console.log('req.params are', req.params)
  console.log('retrieve people with email ' + req.params.name)
  var html = '<html><h1>Hello ' + req.params.name + '</h1></html>'
  res.send(html)
})

app.get('/capitalize/:string')

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
