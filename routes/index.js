var express = require('express');
var router = express.Router();

var rootsController = require('../controller/Roots');
var roots = new rootsController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Datos actualizados del Covid-19 Ecuador',
  	casos:"426", 
  	muertos:"7",
  	recuperados:"3",
  	descartados:"533",
  	sospechosos:"711",
  	pruebas:"1670",
  	aislamiento:"399",
  	estables:"10",
  	reservado:"7",

  	guayas:"318",
  	pichincha:"35",
  	rios:"19",
  	azuay:"18",
  	manabí:"9",
  	loja:"5",
  	cañar:"3",
  	morona:"3",
  	chimborazo:"3",
  	sucumbios:"3",
  	bolívar:"4",
  	oro:"2",
  	imbabura:"2",
  	tsachilas:"1",
  	elena:"1",


  	carchi:"0",
  	cotopaxi:"0",
  	tungurahua:"0",
  	galapagos:"0",
  	esmeraldas:"0",
  	napo:"0",
  	orellana:"0",
  	pastaza:"0",
  	zamora:"0",
  	
  	 });
});

router.get('/datos',roots.datos);
router.get('/datos',roots.datos);

module.exports = router;