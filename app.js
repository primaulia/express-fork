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
  res.send('91234567')
})

app.get('/services', function (req, res) {
  res.send('brian services')
})

app.get('/capitalize/:string', function (req, res) {

var Upp = req.params.string.toUpperCase()
  var html = '<html><body><h1>'+ Upp + '</h1></body></html>'

  res.send(html)
})

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
