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

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
