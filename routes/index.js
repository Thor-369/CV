
var express = require('express');
var router = express.Router();



var cases= "3995";
/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});


router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"220",
  	muertosP:"182",
  	recuperados:"140",
  	descartados:"3956",
  	sospechosos:"5137",
  	pruebas:"14406",
  	aislamiento:"3333",
  	estables:"156",
  	reservado:"146",

  	guayas:"2706",
  	pichincha:"418",
  	rios:"159",
  	azuay:"100",
  	manabí:"115",
  	loja:"27",
  	chimborazo:"50",
  	bolívar:"27",
  	cañar:"59",
  	morona:"12",
  	sucumbios:"33",
  	imbabura:"21",
  	tsachilas:"43",
  	oro:"58",
  	esmeraldas:"20",
  	elena:"52",
    cotopaxi:"28",
  	tungurahua:"22",
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