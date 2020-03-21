var express = require('express');
var router = express.Router();

var rootsController = require('../controller/Roots');
var roots = new rootsController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Datos actualizados del Covid-19 Ecuador',
  	

  	casos:"506", 
  	muertos:"7",
  	recuperados:"3",
  	descartados:"601",
  	sospechosos:"857",
  	pruebas:"1964",
  	aislamiento:"479",
  	estables:"10",
  	reservado:"7",

  	guayas:"381",
  	pichincha:"44",
  	rios:"20",
  	azuay:"19",
  	manabí:"9",
  	loja:"5",
  	chimborazo:"4",
  	bolívar:"4",
  	cañar:"3",
  	morona:"3",
  	sucumbios:"3",
  	imbabura:"3",
  	tsachilas:"3",
  	oro:"2",
  	esmeraldas:"2",
  	elena:"1",


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