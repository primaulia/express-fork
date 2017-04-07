var express = require('express')
var app = express()
var port = 9000

app.get('/', function (req, res) {
  res.send('hello brian')
})

app.get('/food', function (req, res) {
  res.send('I LOVE AYAM MASAK MERAH')
})

app.get('/drink', function (req, res) {
  res.send('BAILEYS!!!')
})

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
