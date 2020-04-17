
var express = require('express');
var router = express.Router();



var cases= "8450";
/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});


router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"421",
  	muertosP:"675",
  	recuperados:"922",
  	descartados:"8075",
  	pruebas:"29596",
  	aislamiento:"6732",
  	estables:"234",
  	reservado:"141",

  	guayas:"5777",
  	pichincha:"779",
  	rios:"276",
  	azuay:"207",
  	manabí:"262",
  	loja:"98",
  	chimborazo:"105",
  	bolívar:"39",
  	cañar:"118",
  	morona:"23",
  	sucumbios:"34",
  	imbabura:"43",
  	tsachilas:"76",
  	oro:"207",
  	esmeraldas:"85",
  	elena:"95",
    cotopaxi:"50",
  	tungurahua:"65",
  	galapagos:"42",
  	carchi:"26",
  	pastaza:"18",
  	zamora:"8",
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