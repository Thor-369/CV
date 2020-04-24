
var express = require('express');
var router = express.Router();



/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});

var cases= "22719";

router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"576",
  	muertosP:"1060",
  	recuperados:"1366",
  	descartados:"23138",
  	pruebas:"56513",
  	aislamiento:"20350",
  	estables:"300",
  	reservado:"127",

  	guayas:"15365",
  	pichincha:"1634",
  	rios:"668",
  	azuay:"449",
  	manabí:"1869",
  	loja:"213",
  	chimborazo:"219",
  	bolívar:"105",
  	cañar:"269",
  	morona:"48",
  	sucumbios:"55",
  	imbabura:"97",
  	tsachilas:"197",
  	oro:"477",
  	esmeraldas:"195",
  	elena:"321",
    cotopaxi:"109",
  	tungurahua:"152",
  	galapagos:"86",
  	carchi:"59",
  	pastaza:"39",
  	zamora:"42",
  	napo:"20",
  	orellana:"31",

  	 });
});


module.exports = router;