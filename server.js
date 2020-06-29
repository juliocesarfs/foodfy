const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

const recipes = require('./data');

server.use(express.static('public'));

server.use(express.static('assets'));

server.set('view engine', 'njk');

nunjucks.configure('views', { 
  express: server,
  autoescape: false,
  noCache: true
});

server.get('/', function(req, res) {
  return res.render('index', { recipes });
});

server.get('/about.njk', function(req, res) {
  return res.render('about');
});


server.get('/recipes.njk', function(req, res) {
  return res.render('recipes');
});


server.listen(5000, function() {
  console.log('Server is running');
})