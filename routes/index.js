
var express = require('express');
var router = express.Router();



var cases= "10850";
/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});


router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
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