
var express = require('express');
var router = express.Router();



/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});

var cases= "23240";

router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"663",
  	muertosP:"1138",
  	recuperados:"1557",
  	descartados:"25052",
  	pruebas:"61529",
  	aislamiento:"19498",
  	estables:"273",
  	reservado:"146",
  	

  	azuay:"314",
  	bolívar:"124",
  	cañar:"211",
  	carchi:"42",
  	chimborazo:"145",
    cotopaxi:"80",
  	oro:"327",
  	esmeraldas:"143",
  	galapagos:"59",
  	guayas:"10172",
  	imbabura:"77", 
  	loja:"143",
  	rios:"662",
  	manabí:"514",
  	morona:"34",
  	napo: "15",
  	orellana:"28",
  	pastaza:"32",
  	pichincha:"1194"
  	elena:"343",
  	tsachilas:"138",
  	sucumbios:"36",
  	tungurahua:"135",
  	zamora:"36",

  	 });
});


module.exports = router;