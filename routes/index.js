var express = require('express');
var router = express.Router();

var rootsController = require('../controller/Roots');
var roots = new rootsController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Datos actualizados del Covid-19 Ecuador',
  	

  	casos:"789", 
  	muertos:"14",
  	recuperados:"3",
  	descartados:"872",
  	sospechosos:"699",
  	pruebas:"2360",
  	aislamiento:"701",
  	estables:"54",
  	reservado:"17",

  	guayas:"607",
  	pichincha:"60",
  	rios:"25",
  	azuay:"19",
  	manabí:"25",
  	loja:"5",
  	chimborazo:"9",
  	bolívar:"8",
  	cañar:"4",
  	morona:"3",
  	sucumbios:"6",
  	imbabura:"4",
  	tsachilas:"4",
  	oro:"6",
  	esmeraldas:"2",
  	elena:"2",


  	carchi:"0",
  	cotopaxi:"0",
  	tungurahua:"0",
  	galapagos:"0",
  	napo:"0",
  	orellana:"0",
  	pastaza:"0",
  	zamora:"0",
  	
  	 });
});

router.get('/datos',roots.datos);
router.get('/datos',roots.datos);

module.exports = router;