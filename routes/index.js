
var express = require('express');
var router = express.Router();



/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});


router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
var cases= "10850";
  	casos:cases, 
  	muertos:"537",
  	muertosP:"952",
  	recuperados:"1262",
  	descartados:"10757",
  	pruebas:"34840",
  	aislamiento:"8591",
  	estables:"319",
  	reservado:"141",

  	guayas:"7391",
  	pichincha:"926",
  	rios:"390",
  	azuay:"273",
  	manabí:"316",
  	loja:"132",
  	chimborazo:"124",
  	bolívar:"59",
  	cañar:"162",
  	morona:"31",
  	sucumbios:"35",
  	imbabura:"51",
  	tsachilas:"97",
  	oro:"289",
  	esmeraldas:"104",
  	elena:"177",
    cotopaxi:"59",
  	tungurahua:"82",
  	galapagos:"54",
  	carchi:"35",
  	pastaza:"20",
  	zamora:"21",
  	napo:"10",
  	orellana:"12",

  	 });
});


module.exports = router;