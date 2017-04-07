var express = require('express')
var app = express()
var port = 3000

app.get('/', function (req, res) {
  res.send('hello brian')
})

app.get('/urgh', function (req, res) {
  res.send('urgh brian')
})

app.get('/faq', function (req, res) {
  res.send('faq brian')
})

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
