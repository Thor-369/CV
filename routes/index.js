
var express = require('express');
var router = express.Router();



var cases= "9022";
/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});


router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"456",
  	muertosP:"731",
  	recuperados:"1008",
  	descartados:"8491",
  	pruebas:"30922",
  	aislamiento:"7204",
  	estables:"220",
  	reservado:"134",

  	guayas:"6150",
  	pichincha:"794",
  	rios:"304",
  	azuay:"217",
  	manabí:"274",
  	loja:"105",
  	chimborazo:"108",
  	bolívar:"45",
  	cañar:"125",
  	morona:"26",
  	sucumbios:"34",
  	imbabura:"43",
  	tsachilas:"79",
  	oro:"247",
  	esmeraldas:"86",
  	elena:"135",
    cotopaxi:"51",
  	tungurahua:"66",
  	galapagos:"53",
  	carchi:"28",
  	pastaza:"18",
  	zamora:"17",
  	napo:"8",
  	orellana:"9",

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