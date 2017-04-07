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

app.get('/contact', function (req, res) {
  res.send('contact brian')
})


app.get('/services', function (req, res) {
  res.send('services brian')
})


app.get('/capitalize/:string', function(req, res){
  var upp = req.params.string.toUpperCase()
  var html = '<html><h1>' + upp + '</h1</html>'
  res.send(html)
})

app.listen(port, function (err) {
  if (err) {
     console.log(err)
   }
  console.log('express is running on port ' + port)
})
