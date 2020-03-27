var express = require('express');
var router = express.Router();

var rootsController = require('../controller/Roots');
var roots = new rootsController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Datos actualizados del Covid-19 Ecuador',
  	

  	casos:"1595", 
  	muertos:"36",
  	recuperados:"3",
  	descartados:"1889",
  	sospechosos:"2148",
  	pruebas:"5632",
  	aislamiento:"1404",
  	estables:"71",
  	reservado:"81",

  	guayas:"1175",
  	pichincha:"132",
  	rios:"58",
  	azuay:"42",
  	manabí:"40",
  	loja:"12",
  	chimborazo:"11",
  	bolívar:"12",
  	cañar:"16",
  	morona:"8",
  	sucumbios:"18",
  	imbabura:"9",
  	tsachilas:"9",
  	oro:"21",
  	esmeraldas:"4",
  	elena:"10",
    cotopaxi:"4",
  	tungurahua:"4",
  	galapagos:"4",
  	carchi:"3",
  	pastaza:"2",
  	zamora:"1",


  	napo:"0",
  	orellana:"0",
  	
  	 });
});

router.get('/datos',roots.datos);
router.get('/datos',roots.datos);

module.exports = router;