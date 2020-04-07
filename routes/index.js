
var express = require('express');
var router = express.Router();



var cases= "3747";
/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});


router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"191",
  	muertosP:"173",
  	recuperados:"100",
  	descartados:"3843",
  	sospechosos:"5137",
  	pruebas:"13039",
  	aislamiento:"3066",
  	estables:"234",
  	reservado:"156",

  	guayas:"2534",
  	pichincha:"395",
  	rios:"158",
  	azuay:"100",
  	manabí:"88",
  	loja:"27",
  	chimborazo:"46",
  	bolívar:"27",
  	cañar:"59",
  	morona:"11",
  	sucumbios:"30",
  	imbabura:"21",
  	tsachilas:"36",
  	oro:"58",
  	esmeraldas:"17",
  	elena:"52",
    cotopaxi:"23",
  	tungurahua:"22",
  	galapagos:"11",
  	carchi:"12",
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