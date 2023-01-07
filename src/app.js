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
const expressEjsLayouts = require('express-ejs-layouts');

// Paquetes NODEJS
const path = require('path');

// Controladores
const { pagina_no_encontrada } = require('./routes/404/404.routes');


// Configuraciones express
app.use(expressEjsLayouts)
app.set('views', path.join( __dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layoutt', path.join( app.get('views'), 'layout'));
const ruta_layout = app.get('layoutt')
app.set('layout', path.join(ruta_layout, 'layout'));



// Middledewares


app.get('/', (req, res) => {

    var local_i = {
        Titulo: 'Inicio',
        autor: 'EDGIDIO RANZE LEÓN FLOREZ',
    };

    res.render('pages/dashboard/index', {
        local_i
    });
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