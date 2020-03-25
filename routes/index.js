var express = require('express');
var router = express.Router();

var rootsController = require('../controller/Roots');
var roots = new rootsController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Datos actualizados del Covid-19 Ecuador',
  	

  	casos:"1173", 
  	muertos:"28",
  	recuperados:"3",
  	descartados:"1346",
  	sospechosos:"1562",
  	pruebas:"3618",
  	aislamiento:"919",
  	estables:"78",
  	reservado:"55",

  	guayas:"859",
  	pichincha:"99",
  	rios:"40",
  	azuay:"31",
  	manabí:"38",
  	loja:"8",
  	chimborazo:"11",
  	bolívar:"11",
  	cañar:"10",
  	morona:"7",
  	sucumbios:"6",
  	imbabura:"8",
  	tsachilas:"7",
  	oro:"17",
  	esmeraldas:"4",
  	elena:"6",
    cotopaxi:"2",
  	tungurahua:"2",
  	galapagos:"4",
  	carchi:"2",


  	napo:"0",
  	orellana:"0",
  	pastaza:"0",
  	zamora:"0",
  	
  	 });
});

router.get('/datos',roots.datos);
router.get('/datos',roots.datos);

module.exports = router;