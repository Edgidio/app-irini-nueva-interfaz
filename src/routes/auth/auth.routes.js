const express = require('express');
const router = express.Router();

// Pquetes NPM

// Pquetes NODE

// Controladores
const {inicio_de_sesion_controller}  = require('../../controllers/auth/auth_inicio_de_sesion.controller');

// Vistas
router.get('/inicio-de-sesion', (req, res) => {

    var local_i = {
        Titulo: 'Inicio de sesión',
        autor: 'EDGIDIO RANZE LEÓN FLOREZ',
    };

    res.render('pages/auth/login', {
        local_i
    });
});

router.post('/inicio-de-sesion', inicio_de_sesion_controller)

// Controladores de las vistas


module.exports = router;