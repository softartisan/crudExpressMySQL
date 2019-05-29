const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.render('inicio');
})

// define the home page route
router.get('/crear', function(req, res) {
  res.render('crearUsuario');
});

router.post('/guardar', (req, res) => {

  const nombre_usuario = req.body.nombre;
  const password_usuario = req.body.clave;

  Usuario.insert(nombre_usuario, password_usuario,(resultado) => {
    if(!resultado) {
      return res.render('crearUsuario', {mensaje: 'No se pudo crear el usuario.'});
    }

    res.render('crearUsuario', {
    mensaje: `Usuario "${nombre_usuario}" creado.`
    });
    
  });

});

// define the about route
router.get('/listar', function(req, res) {
  Usuario.readAll((usuarios) => {
    res.render('listarUsuario',{
      usuarios
    });
    console.log(usuarios);
  });
});

module.exports = router;

