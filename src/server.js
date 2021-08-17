//importando dependencias
const express = require('express'); //a variavel se torna uma função
const nunjucks = require('nunjucks');
const routes = require('./routes');
const methodOverride = require('method-override');

//criando um servidor (executa o express)
const server = express();

//middlewares
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));
server.use(express.static('assets'));
server.use(methodOverride('_method'));
server.use(routes);

//configurando a template engine
server.set('view engine', 'njk');

//configurando o nunjucks para a template engine
nunjucks.configure('src/app/views', {
  express: server,
  autoescape: false,
  noCache: true
});


//iniciar servidor
server.listen(5000, function() {
  console.log('server is running');
});