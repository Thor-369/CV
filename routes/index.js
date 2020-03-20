var express = require('express');
var router = express.Router();

var rootsController = require('../controller/Roots');
var roots = new rootsController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Datos actualizados del Covid-19 Ecuador',
  	casos:"367", 
  	muertos:"5",
  	recuperados:"3",
  	descartados:"483",
  	sospechosos:"582",
  	pruebas:"1432",
  	aislamiento:"345",
  	estables:"9",
  	reservado:"5",

  	guayas:"273",
  	pichincha:"32",
  	rios:"18",
  	azuay:"14",
  	manabí:"7",
  	loja:"4",
  	cañar:"3",
  	morona:"3",
  	chimborazo:"3",
  	sucumbios:"2",
  	bolívar:"2",
  	oro:"2",
  	imbabura:"2",
  	tsachilas:"1",



  	carchi:"0",
  	cotopaxi:"0",
  	tungurahua:"0",
  	galapagos:"0",
  	esmeraldas:"0",
  	elena:"0",
  	napo:"0",
  	orellana:"0",
  	pastaza:"0",
  	zamora:"0",
  	
  	 });
});

router.get('/datos',roots.datos);
router.get('/datos',roots.datos);

module.exports = router;