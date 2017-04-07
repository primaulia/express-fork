var express = require('express')
var app = express()
var port1 = 4000
var port2 = 3000

app.get('/', function (req, res) {
  res.send('hello brian')
})

app.get('/about', function (req, res) {
  res.send('about brian')
})

app.get('/faq', function (req, res) {
  res.send('faq brian')
})
app.get('/hello', function (req, res) {
  res.send('hello world')
})

app.listen(port1, function () {
  console.log('express is running on port ' + port1)
})

app.listen(port2, function () {
  console.log('express is running on port ' + port2)
})
