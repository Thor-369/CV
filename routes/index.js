var express = require('express');
var router = express.Router();

var rootsController = require('../controller/Roots');
var roots = new rootsController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Datos actualizados del Covid-19 Ecuador',
  	casos:"260", 
  	muertos:"4",
  	recuperados:"3",
  	descartados:"412",
  	sospechosos:"481",
  	pruebas:"1153",
  	aislamiento:"236",
  	estables:"12",
  	reservado:"5",
  	 });
});

router.get('/datos',roots.datos);
router.get('/datos',roots.datos);

module.exports = router;
