'use strict'
var Project = require('../models/project');
var UsuarioPasajero = require('../models/usuarioPasajero');
var fs = require('fs');

var controller = {
    home: function(req, res)
    {
        return res.status(200).send({
            message: 'Soy la home'
        })
    },
    test: function(req, res){
        return res.status(200).send({
            message: 'Soy el metodo o accion test del controlador de project'
        })
    },
    saveUsuarioPasajero: function(req, res)
    {   
        return res.status(200).send({
            message: 'Se registro correctamente'
        })
    }
};
module.exports = controller;
//Inicio