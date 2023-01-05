const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

// Server socket.IO
const { Server } = require("socket.io");
const io = new Server(server);

// Paquetes NPM
const morgan = require('morgan');
require('dotenv').config();
const express_session = require('express-session');
const mySqlSession = require('express-mysql-session');

// Paquetes NODEJS
const path = require('path');

// Controladores
const { pagina_no_encontrada } = require('./routes/404/404.routes');

// Configuraciones express
app.set('view engine', 'ejs');
app.set('views', path.join( __dirname, 'views'));


app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1><script src="/socket.io/socket.io.js"></script><script>var socket = io();</script>');
});

// Publico
app.use(express.static(__dirname + '/public'));

// 404
app.use(pagina_no_encontrada)


io.on('connection', (socket) => {
    console.log('Nuevo usuario conectado');
});


// exprort servidor
module.exports = server;