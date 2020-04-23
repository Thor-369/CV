
var express = require('express');
var router = express.Router();



/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});

var cases= "11183";

router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"560",
  	muertosP:"1028",
  	recuperados:"1328",
  	descartados:"12200",
  	pruebas:"34420",
  	aislamiento:"8876",
  	estables:"273",
  	reservado:"146",

  	guayas:"7502",
  	pichincha:"991",
  	rios:"402",
  	azuay:"285",
  	manabí:"330",
  	loja:"136",
  	chimborazo:"130",
  	bolívar:"66",
  	cañar:"166",
  	morona:"31",
  	sucumbios:"35",
  	imbabura:"58",
  	tsachilas:"123",
  	oro:"300",
  	esmeraldas:"115",
  	elena:"182",
    cotopaxi:"68",
  	tungurahua:"96",
  	galapagos:"54",
  	carchi:"38",
  	pastaza:"25",
  	zamora:"24",
  	napo:"12",
  	orellana:"14",

  	 });
});


module.exports = router;