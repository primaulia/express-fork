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

app.get('/capitalize/:string', function (req, res) {
  var final = req.params.string.split('').map(function (char, index) {
    return index === 0 ? char.toUpperCase() : char
  }).join('')
  res.send(final)
})

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
