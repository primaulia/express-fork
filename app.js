var express = require('express')
var app = express()
var port = 3000

app.get('/', function (req, res) {

  res.send('Hello Cara')
})

app.get('/about', function (req, res) {
  res.send('About Cara')
})

app.get('/contact', function (req, res) {
  res.send('Contact Cara')
})

app.get('/people/*', function (req, res) {
  console.log('req.params are ', req.params)
  console.log('retrieve people with email ' + req.params.email);
  var html = '<html><body><h1>Hello ' + req.params[0] + '</h1></body></html>'
  res.send(html)
})

app.get('/capitalize/:string', function (req, res) {
  console.log('req.params are ', req.params)
  console.log('retrieve people with email ' + req.params.string);
  var html = '<html><body><h1>Hello ' + req.params.string.toUpperCase() + '</h1></body></html>'
  res.send(html)
})



app.listen(port, function () {
  console.log('express is running on port ' + port)
})
