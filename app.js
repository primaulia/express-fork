var express = require('express')
var app = express()
var port = 4000

// connect to db
var mongoose = require('mongoose')
var dbURI = 'mongodb://localhost/test'
mongoose.connect(dbURI)

// require the models
var User = require('./models/user')
var Home = require('./models/home')

// setting my template engine for express
app.set('view engine', 'ejs')

// setting the layout structure
var ejsLayouts = require('express-ejs-layouts')
app.use(ejsLayouts)

// handle the post request
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

// This is where your routes start
// app.get('/', function (req, res) {
//   User.find({}, function (err, users) {
//     console.log(users)
//     if (err) console.error(err)
//     res.render('homepage', {allUsers: users})
//   })
// })

app.get('/', function (req, res) {
  Home.find({}, function (err, homes) {
    if (err) console.error(err)
    res.render('home', {allHomes: homes})
  })
})

app.post('/', function (req, res) {
  console.log(req.body)
  // talk to the db
  // insert the given data into the database
  res.send(req.body)
})

app.get('/users/:id', function (req, res) {
  console.log(req.params.id)
  User.findById(req.params.id, function (err, user) {
    if (err) console.error(err)
    res.render('userpage', {theUser: user})
  })
})

app.get('/about', function (req, res) {
  res.render('about')
})

app.get('/faq', function (req, res) {
  res.render('faq')
})

app.get('/people/:email', function (req, res) {
  console.log('req.params are', req.params)
  console.log('retrieve people with email ' + req.params.name)
  var html = '<html><h1>Hello ' + req.params.name + '</h1></html>'
  res.send(html)
})

app.get('/capitalize/:string')

// This is where your routes end

app.listen(port, function () {
  console.log('express is running on port ' + port)
})
