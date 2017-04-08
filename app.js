var express = require('express')
var app = express()
var port = 4000

var mongoose = require('mongoose')
var dbURI = 'mongodb://localhost/test'
mongoose.connect(dbURI)

var User = require('./models/user')

function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// Setting my template engine for express
app.set('view engine', 'ejs')

// Setting layout structure
var ejsLayouts = require('express-ejs-layouts')
app.use(ejsLayouts)

app.get('/', function (req, res) {
  // var html = '<html><body><h1>Hello</h1></body></html>'
  // res.send(html)
  // res.sendFile('./homepage.html', {root: __dirname})

  User.find({}, function(err, dataArr) {
    if(err) console.error(err)
    console.log(dataArr)
    res.render('homepage', {data: dataArr})
  })
})

app.get('/users/:id', function (req, res) {
  User.findById(req.params.id, function (err, data) {
    if(err) console.error(err)
    console.log(data)
    res.render('userpage', {data: data})
  })
})

app.get('/about', function (req, res) {
  // console.log(req.params)
  // res.send('about brian')
  // res.sendFile('./about.html', {root: __dirname})
  res.render('about')
})

app.get('/faq', function (req, res) {
  // res.send('faq brian')
  // res.sendFile('./faq.html', {root: __dirname})
  res.render('faq')
})

// Wildcard
app.get('/people/*', function (req, res) {
  // console.log(req.params)
  // console.log(req.params['0'])
  // var html = '<html><body><h1>' + req.params['0'] + '</h1></body></html>'
  // res.send(html)
})

app.get('/capitalize/:string', function (req, res) {
  console.log(req.params)
  console.log(req.params.string)
  // var output = req.params.string.toUpperCase()
  var output = capitalizeString(req.params.string)
  var html = '<html><body><h1>' + output + '</h1></body></html>'
  res.send(html)
})

app.get('/contact', function (req, res) {
  res.send('contact brian')
})

app.get('/services', function (req, res) {
  res.send('services brian')
})

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
