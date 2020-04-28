
var express = require('express');
var router = express.Router();



/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});

var cases= "24258";

router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"871",
  	muertosP:"1212",
  	recuperados:"1643",
  	descartados:"26703",
  	pruebas:"64558",
  	aislamiento:"20103",
  	estables:"318",
  	reservado:"134",


  	azuay:"426",
  	bolívar:"125",
  	cañar:"285",
  	carchi:"49",
  	chimborazo:"157",
    cotopaxi:"87",
  	oro:"448",
  	esmeraldas:"164",
  	galapagos:"60",
  	guayas:"10200",
  	imbabura:"81", 
  	loja:"223",
  	rios:"665",
  	manabí:"554",
  	morona:"61",
  	napo: "19",
  	orellana:"30",
  	pastaza:"43",
  	pichincha:"1298",
  	elena:"347",
  	tsachilas:"179",
  	sucumbios:"39",
  	tungurahua:"145",
  	zamora:"43",

  	 });
});


module.exports = router;