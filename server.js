// Edit portfolio page so that it contains RPS game and Clicky game

// Create route handling in server for all pages and 404 page

// Create a login page with session that eventually expires

// Redeploy to heroku

var express = require('express');
var handleBars = require('express-handlebars');


var app = express();
var PORT = process.env.PORT || 8090;

app.engine('handlebars', handleBars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use("/js", express.static("public/js"));


app.get("/vanilla", function(req, res) {
  var data = {
    name: 'vanilla',
    price: 10,
    awesomeness: 3
  }
});

app.get("/chocolate", function(req, res) {
  var data = {
    name: 'chocolate',
    price: 4,
    awesomeness: 8
  }
  res.render('icecream', data);
});

app.get("/banana", function(req, res) {
  var data = {
    name: 'banana',
    price: 1,
    awesomeness: 1
  }
  res.render('icecream', data);
});

app.get("/greentea", function(req, res) {
  var data = {
    name: 'greentea',
    price: 5,
    awesomeness: 7
  }
  res.render('icecream', data);
});

app.get("/jawbreakers", function(req, res) {
  var data = {
    name: 'jawbreakers',
    price: 6,
    awesomeness: 2
  }
  res.render('icecream', data);
});


app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});

