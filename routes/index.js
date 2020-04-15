
var express = require('express');
var router = express.Router();



var cases= "7858";
/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});


router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"388",
  	muertosP:"582",
  	recuperados:"780",
  	descartados:"7495",
  	pruebas:"26093",
  	aislamiento:"6335",
  	estables:"220",
  	reservado:"135",

  	guayas:"5395",
  	pichincha:"634",
  	rios:"239",
  	azuay:"182",
  	manabí:"215",
  	loja:"69",
  	chimborazo:"85",
  	bolívar:"33",
  	cañar:"100",
  	morona:"20",
  	sucumbios:"33",
  	imbabura:"33",
  	tsachilas:"65",
  	oro:"160",
  	esmeraldas:"38",
  	elena:"78",
    cotopaxi:"42",
  	tungurahua:"43",
  	galapagos:"11",
  	carchi:"25",
  	pastaza:"13",
  	zamora:"4",
  	napo:"6",
  	orellana:"6",

  	mguayas:"2534",
  	mpichincha:"395",
  	mrios:"158",
  	mazuay:"100",
  	mmanabí:"88",
  	mloja:"27",
  	mchimborazo:"46",
  	mbolívar:"27",
  	mcañar:"59",
  	mmorona:"11",
  	msucumbios:"30",
  	mimbabura:"21",
  	mtsachilas:"36",
  	moro:"58",
  	mesmeraldas:"17",
  	melena:"52",
    mcotopaxi:"23",
  	mtungurahua:"22",
  	mgalapagos:"11",
  	mcarchi:"12",
  	mpastaza:"12",
  	mzamora:"2",
  	mnapo:"2",
  	morellana:"4",
  	
  	 });
});


module.exports = router;