const express = require('express')
const rtObjetos = express.Router()
const Objeto = require('../models/Objetos')

rtObjetos.get('/nuevoObjeto', function (req, res) {
    res.render('objetos/formulario')
})

rtObjetos.post('')



module.exports=rtObjetos