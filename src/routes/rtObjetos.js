const express = require('express')
const rtObjetos = express.Router()
const Objeto = require('../models/Objetos')

rtObjetos.get('/nuevo', function (req, res) {
    res.render('objetos/formulario')
})




module.exports=rtObjetos