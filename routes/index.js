
var express = require('express');
var router = express.Router();



var cases= "4965";
/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});


router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"272",
  	muertosP:"284",
  	recuperados:"339",
  	descartados:"4674",
  	sospechosos:"5137",
  	pruebas:"19102",
  	aislamiento:"4019",
  	estables:"196",
  	reservado:"139",

  	guayas:"3384",
  	pichincha:"494",
  	rios:"193",
  	azuay:"116",
  	manabí:"159",
  	loja:"49",
  	chimborazo:"54",
  	bolívar:"30",
  	cañar:"75",
  	morona:"18",
  	sucumbios:"33",
  	imbabura:"24",
  	tsachilas:"46",
  	oro:"97",
  	esmeraldas:"27",
  	elena:"63",
    cotopaxi:"30",
  	tungurahua:"25",
  	galapagos:"11",
  	carchi:"15",
  	pastaza:"12",
  	zamora:"3",
  	napo:"2",
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