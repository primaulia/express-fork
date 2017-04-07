var express = require('express')
var app = express()
var port = 9000

app.get('/', function (req, res) {
  var html = ''
  res.send('hello brian')
})

app.get('/food', function (req, res) {
  res.send('I LOVE AYAM MASAK MERAH')
})

app.get('/drink', function (req, res) {
  res.send('BAILEYS!!!')
})

app.get('/people/:email', function (req, res) {
  console.log('req.params are', req.params)
  console.log('retrieve people with email' + req.params.email)
  var html = '<html><h1>Hello' + req.params.email + '</h1></html>'
  res.send(html)
})

app.get('/capatalize/:string', function (req, res) {
  var string = req.params.string
  var capString = string.toUpperCase()
  console.log(capString)
  res.send(capString)
})

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
