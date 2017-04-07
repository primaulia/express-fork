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

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
