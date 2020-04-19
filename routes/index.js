
var express = require('express');
var router = express.Router();



var cases= "9468";
/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});


router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"474",
  	muertosP:"817",
  	recuperados:"1061",
  	descartados:"8965",
  	pruebas:"31809",
  	aislamiento:"7564",
  	estables:"245",
  	reservado:"124",

  	guayas:"6446",
  	pichincha:"819",
  	rios:"329",
  	azuay:"223",
  	manabí:"286",
  	loja:"116",
  	chimborazo:"112",
  	bolívar:"49",
  	cañar:"137",
  	morona:"28",
  	sucumbios:"34",
  	imbabura:"47",
  	tsachilas:"81",
  	oro:"257",
  	esmeraldas:"89",
  	elena:"145",
    cotopaxi:"54",
  	tungurahua:"72",
  	galapagos:"54",
  	carchi:"33",
  	pastaza:"20",
  	zamora:"20",
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