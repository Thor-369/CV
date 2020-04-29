
var express = require('express');
var router = express.Router();



/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});

var cases= "24675";

router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"883",
  	muertosP:"1357",
  	recuperados:"1720",
  	descartados:"27510",
  	pruebas:"67273",
  	aislamiento:"20058",
  	estables:"344",
  	reservado:"147",


  	azuay:"432",
  	bolívar:"129",
  	cañar:"288",
  	carchi:"49",
  	chimborazo:"160",
    cotopaxi:"90",
  	oro:"457",
  	esmeraldas:"173",
  	galapagos:"66",
  	guayas:"10417",
  	imbabura:"81", 
  	loja:"224",
  	rios:"687",
  	manabí:"601",
  	morona:"61",
  	napo: "23",
  	orellana:"33",
  	pastaza:"44",
  	pichincha:"1351",
  	elena:"360",
  	tsachilas:"180",
  	sucumbios:"39",
  	tungurahua:"157",
  	zamora:"43",

  	 });
});


module.exports = router;