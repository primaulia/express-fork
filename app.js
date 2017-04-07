var express = require('express')
var app = express()
var port = 4000

var fs = require('fs')

app.set('view engine', 'ejs')

//ROUTE STARTS HERE

app.get('/', function (req, res) {

res.render('homepage')
})

app.get('/about', function (req, res) {
  res.render('about')
})

app.get('/contact', function (req, res) {
  res.render('contact')
})


// app.get('/people/*', function (req, res) {
//   console.log('req.params are ', req.params)
//   console.log('retrieve people with email ' + req.params.email);
//   var html = '<html><body><h1>Hello ' + req.params[0] + '</h1></body></html>'
//   log(res)
//   res.sendFile('.homepage.html')
// })
//
// app.get('/capitalize/:string', function (req, res) {
//   console.log('req.params are ', req.params)
//   console.log('retrieve people with email ' + req.params.string);
//   var html = '<html><body><h1>Hello ' + req.params.string.toUpperCase() + '</h1></body></html>'
//   res.sendFile('.homepage.html')
// })

// ROUTE ENDS HERE

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
