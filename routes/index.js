var express = require('express');
var router = express.Router();

var rootsController = require('../controller/Roots');
var roots = new rootsController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Datos actualizados del Covid-19 Ecuador',
  	

  	casos:"1211", 
  	muertos:"29",
  	recuperados:"3",
  	descartados:"1387",
  	sospechosos:"1692",
  	pruebas:"4290",
  	aislamiento:"1028",
  	estables:"87",
  	reservado:"64",

  	guayas:"885",
  	pichincha:"108",
  	rios:"40",
  	azuay:"31",
  	manabí:"38",
  	loja:"8",
  	chimborazo:"11",
  	bolívar:"11",
  	cañar:"12",
  	morona:"7",
  	sucumbios:"6",
  	imbabura:"8",
  	tsachilas:"7",
  	oro:"17",
  	esmeraldas:"4",
  	elena:"6",
    cotopaxi:"2",
  	tungurahua:"3",
  	galapagos:"4",
  	carchi:"2",
  	pastaza:"1",


  	napo:"0",
  	orellana:"0",
  	zamora:"0",
  	
  	 });
});

router.get('/datos',roots.datos);
router.get('/datos',roots.datos);

module.exports = router;