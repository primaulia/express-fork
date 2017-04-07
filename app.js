var express = require('express')
var app = express()
var port = 3000

app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/capitalize/:string', function (req, res) {
  console.log(req.params.string.toUpperCase())
  var html = '<html><h1 style="font-size: 100px; color: pink;">' + req.params.string.toUpperCase() + '</h1></html>'
  res.send(html)
})

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
