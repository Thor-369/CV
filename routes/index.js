
var express = require('express');
var router = express.Router();



var cases= "7466";
/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});


router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"333",
  	muertosP:"384",
  	recuperados:"501",
  	descartados:"7118",
  	sospechosos:"5137",
  	pruebas:"23635",
  	aislamiento:"6267",
  	estables:"196",
  	reservado:"169",

  	guayas:"5381",
  	pichincha:"627",
  	rios:"239",
  	azuay:"178",
  	manabí:"214",
  	loja:"65",
  	chimborazo:"74",
  	bolívar:"33",
  	cañar:"97",
  	morona:"19",
  	sucumbios:"33",
  	imbabura:"32",
  	tsachilas:"60",
  	oro:"150",
  	esmeraldas:"38",
  	elena:"77",
    cotopaxi:"42",
  	tungurahua:"42",
  	galapagos:"11",
  	carchi:"24",
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