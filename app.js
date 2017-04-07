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

app.get('/addUser', function (req, res) {
  res.send('add user brian')
})

app.get('/updateUser', function (req, res) {
  res.send('update user brian')
})

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
