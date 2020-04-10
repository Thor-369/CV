
var express = require('express');
var router = express.Router();



var cases= "7161";
/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});


router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"297",
  	muertosP:"311",
  	recuperados:"368",
  	descartados:"6496",
  	sospechosos:"5137",
  	pruebas:"21568",
  	aislamiento:"6102",
  	estables:"223",
  	reservado:"171",

  	guayas:"5281",
  	pichincha:"579",
  	rios:"226",
  	azuay:"151",
  	manabí:"188",
  	loja:"56",
  	chimborazo:"65",
  	bolívar:"32",
  	cañar:"90",
  	morona:"19",
  	sucumbios:"34",
  	imbabura:"32",
  	tsachilas:"51",
  	oro:"137",
  	esmeraldas:"31",
  	elena:"74",
    cotopaxi:"33",
  	tungurahua:"29",
  	galapagos:"11",
  	carchi:"17",
  	pastaza:"13",
  	zamora:"4",
  	napo:"3",
  	orellana:"5",

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