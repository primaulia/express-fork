var express = require('express')
var app = express()
var port = 3000

app.get('/', function (req, res) {
  res.send('hello jonathan')
})

app.get('/about', function (req, res) {
  res.send('about jonathan')
})

app.get('/faq', function (req, res) {
  res.send('faq jonathan')
})

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
