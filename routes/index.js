
var express = require('express');
var router = express.Router();



var cases= "4450";
/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});


router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"242",
  	muertosP:"240",
  	recuperados:"140",
  	descartados:"4208",
  	sospechosos:"5137",
  	pruebas:"15526",
  	aislamiento:"3744",
  	estables:"178",
  	reservado:"146",

  	guayas:"3047",
  	pichincha:"440",
  	rios:"175",
  	azuay:"107",
  	manabí:"132",
  	loja:"34",
  	chimborazo:"51",
  	bolívar:"27",
  	cañar:"64",
  	morona:"17",
  	sucumbios:"33",
  	imbabura:"21",
  	tsachilas:"44",
  	oro:"82",
  	esmeraldas:"25",
  	elena:"55",
    cotopaxi:"28",
  	tungurahua:"23",
  	galapagos:"11",
  	carchi:"14",
  	pastaza:"12",
  	zamora:"2",
  	napo:"2",
  	orellana:"4",

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