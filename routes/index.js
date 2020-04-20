
var express = require('express');
var router = express.Router();



var cases= "10128";
/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});


router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"507",
  	muertosP:"826",
  	recuperados:"1150",
  	descartados:"9732",
  	pruebas:"32453",
  	aislamiento:"8091",
  	estables:"256",
  	reservado:"124",

  	guayas:"6921",
  	pichincha:"841",
  	rios:"378",
  	azuay:"232",
  	manabí:"296",
  	loja:"128",
  	chimborazo:"116",
  	bolívar:"54",
  	cañar:"145",
  	morona:"30",
  	sucumbios:"34",
  	imbabura:"49",
  	tsachilas:"94",
  	oro:"266",
  	esmeraldas:"102",
  	elena:"163",
    cotopaxi:"57",
  	tungurahua:"74",
  	galapagos:"54",
  	carchi:"35",
  	pastaza:"20",
  	zamora:"20",
  	napo:"9",
  	orellana:"10",

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