var express = require('express');
var router = express.Router();

var rootsController = require('../controller/Roots');
var roots = new rootsController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Datos actualizados del Covid-19 Ecuador',
  	

  	casos:"1823", 
  	muertos:"48",
  	recuperados:"3",
  	descartados:"2076",
  	sospechosos:"2503",
  	pruebas:"6402",
  	aislamiento:"1565",
  	estables:"113",
  	reservado:"94",

  	guayas:"1345",
  	pichincha:"161",
  	rios:"60",
  	azuay:"42",
  	manabí:"44",
  	loja:"13",
  	chimborazo:"15",
  	bolívar:"14",
  	cañar:"19",
  	morona:"8",
  	sucumbios:"18",
  	imbabura:"9",
  	tsachilas:"14",
  	oro:"23",
  	esmeraldas:"4",
  	elena:"10",
    cotopaxi:"4",
  	tungurahua:"4",
  	galapagos:"4",
  	carchi:"5",
  	pastaza:"5",
  	zamora:"1",


  	napo:"0",
  	orellana:"0",
  	
  	 });
});

router.get('/datos',roots.datos);
router.get('/datos',roots.datos);

module.exports = router;