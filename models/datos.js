'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Datos = Schema({
    id: mongoose.Schema.Types.ObjectId,
    external_id: String,
    confirmados: String,
    fallecidos: String,
    recuperados: String,
    descartados: String,
    sospechosos: String,
    aislamiento: String,
    hospitalizados: String,
    graves: String,
    poblacion: String,   
}, false);

module.exports = mongoose.model("Datos", DatosSchema);
