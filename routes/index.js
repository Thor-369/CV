var express = require('express');
var router = express.Router();

var rootsController = require('../controller/Roots');
var roots = new rootsController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Datos actualizados del Covid-19 Ecuador',
  	

  	casos:"1082", 
  	muertos:"27",
  	recuperados:"3",
  	descartados:"1225",
  	sospechosos:"1311",
  	pruebas:"3618",
  	aislamiento:"919",
  	estables:"78",
  	reservado:"55",

  	guayas:"827",
  	pichincha:"72",
  	rios:"37",
  	azuay:"28",
  	manabí:"32",
  	loja:"7",
  	chimborazo:"11",
  	bolívar:"9",
  	cañar:"7",
  	morona:"6",
  	sucumbios:"6",
  	imbabura:"4",
  	tsachilas:"7",
  	oro:"14",
  	esmeraldas:"3",
  	elena:"6",
    cotopaxi:"1",
  	tungurahua:"2",
  	galapagos:"4",


  	carchi:"0",
  	napo:"0",
  	orellana:"0",
  	pastaza:"0",
  	zamora:"0",
  	
  	 });
});

router.get('/datos',roots.datos);
router.get('/datos',roots.datos);

module.exports = router;