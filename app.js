var express = require('express')
var app = express()
var port = 3015

app.get('/', function (req, res) {
  res.send('hello me')
})

app.get('/about', function (req, res) {
  res.send('about me')
})

app.get('/faq', function (req, res) {
  res.send('faq me')
})

app.get('/contact', function (req, res) {
  res.send('contact me for natrual calcium')
})

app.get('/people/:email', function(req, res) { // if you put /people/1 in the url then 1 is the email
  console.log('req.params are', req.params);
  console.log('retrive people with email ' + req.params.email);
  res.send('my email is ' + req.params.email)
})

app.get('/capitalize/:string', function(req, res) {
  res.send(req.params.string.toUpperCase())
})

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
