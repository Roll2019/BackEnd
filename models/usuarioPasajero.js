'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioPasajeroSchema = Schema({
    name: String,
    apellido: String,
    usuario: String,
    year: Number,
    langs: String,
    image: String
});

module.exports = mongoose.model('usuarioPasajero',UsuarioPasajeroSchema);