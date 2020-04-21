
var express = require('express');
var router = express.Router();



var cases= "10398";
/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});


router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"520",
  	muertosP:"902",
  	recuperados:"1207",
  	descartados:"10082",
  	pruebas:"33389",
  	aislamiento:"8233",
  	estables:"301",
  	reservado:"137",

  	guayas:"7108",
  	pichincha:"868",
  	rios:"382",
  	azuay:"247",
  	manabí:"296",
  	loja:"132",
  	chimborazo:"121",
  	bolívar:"55",
  	cañar:"149",
  	morona:"30",
  	sucumbios:"34",
  	imbabura:"51",
  	tsachilas:"94",
  	oro:"276",
  	esmeraldas:"102",
  	elena:"165",
    cotopaxi:"57",
  	tungurahua:"81",
  	galapagos:"54",
  	carchi:"35",
  	pastaza:"20",
  	zamora:"20",
  	napo:"9",
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