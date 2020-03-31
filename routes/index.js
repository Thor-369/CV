var express = require('express');
var router = express.Router();


//web push
var webpush = require=("/webpush");



var cases= "2302";
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"79",
  	recuperados:"58",
  	descartados:"2526",
  	sospechosos:"3423",
  	pruebas:"8251",
  	aislamiento:"1805",
  	estables:"206",
  	reservado:"100",

  	guayas:"1615",
  	pichincha:"219",
  	rios:"80",
  	azuay:"78",
  	manabí:"54",
  	loja:"22",
  	chimborazo:"17",
  	bolívar:"15",
  	cañar:"39",
  	morona:"10",
  	sucumbios:"27",
  	imbabura:"10",
  	tsachilas:"18",
  	oro:"34",
  	esmeraldas:"10",
  	elena:"17",
    cotopaxi:"8",
  	tungurahua:"9",
  	galapagos:"5",
  	carchi:"6",
  	pastaza:"5",
  	zamora:"2",


  	napo:"0",
  	orellana:"0",
  	
  	 });
});


module.exports = router;