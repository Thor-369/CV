var express = require('express');
var router = express.Router();

var rootsController = require('../controller/Roots');
var roots = new rootsController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Datos actualizados del Covid-19 Ecuador',
  	

  	casos:"532", 
  	muertos:"7",
  	recuperados:"3",
  	descartados:"649",
  	sospechosos:"870",
  	pruebas:"2051",
  	aislamiento:"502",
  	estables:"5",
  	reservado:"15",

  	guayas:"397",
  	pichincha:"50",
  	rios:"22",
  	azuay:"19",
  	manabí:"9",
  	loja:"5",
  	chimborazo:"4",
  	bolívar:"5",
  	cañar:"3",
  	morona:"3",
  	sucumbios:"3",
  	imbabura:"3",
  	tsachilas:"4",
  	oro:"2",
  	esmeraldas:"2",
  	elena:"1",


  	carchi:"0",
  	cotopaxi:"0",
  	tungurahua:"0",
  	galapagos:"0",
  	napo:"0",
  	orellana:"0",
  	pastaza:"0",
  	zamora:"0",
  	
  	 });
});

router.get('/datos',roots.datos);
router.get('/datos',roots.datos);

module.exports = router;