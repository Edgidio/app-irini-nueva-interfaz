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
const passport   = require('passport')
const express_session = require('express-session');
const mySqlSession = require('express-mysql-session');
const expressEjsLayouts = require('express-ejs-layouts');

// Paquetes NODEJS
const path = require('path');

// Controladores
const { pagina_no_encontrada } = require('./routes/404/404.routes');


// Configuraciones express
app.set('PORT', process.env.PORT || process.env.PUERTO_DEL_SERVIDOR)
app.set('views', path.join( __dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layoutt', path.join( app.get('views'), 'layout'));
const ruta_layout = app.get('layoutt')
app.set('layout', path.join(ruta_layout, 'layout'));

app.set('trust proxy', true);

// Middledewares
app.use(expressEjsLayouts)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// For Passport 
app.use(express_session({ 
    secret: 'Iniri_nadajqw',
    resave: true, 
    saveUninitialized:true
})); // session secret 
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Rutas
app.use('/auth', require('./routes/auth/auth.routes.js'))


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
module.exports = {
    server: server,
    app: app
};