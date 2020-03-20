var express = require('express');
var router = express.Router();

var rootsController = require('../controller/Roots');
var roots = new rootsController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Datos actualizados del Covid-19 Ecuador',
  	casos:"260", 
  	muertos:"4",
  	recuperados:"3",
  	descartados:"412",
  	sospechosos:"481",
  	pruebas:"1153",
  	aislamiento:"236",
  	estables:"12",
  	reservado:"5",

  	guayas:"187",
  	pichincha:"16",
  	rios:"16",
  	azuay:"14",
  	manabí:"8",
  	loja:"4",
  	cañar:"3",
  	morona:"3",
  	chimborazo:"2",
  	sucumbios:"2",
  	bolívar:"2",
  	oro:"1",
  	imbabura:"1",
  	tsachilas:"1",


  	
  	carchi:"0",
  	cotopaxi:"0",
  	tungurahua:"0",
  	galapagos:"0",
  	esmeraldas:"0",
  	elena:"0",
  	napo:"0",
  	orellana:"0",
  	pastaza:"0",
  	zamora:"0",
  	
  	 });
});

router.get('/datos',roots.datos);
router.get('/datos',roots.datos);

module.exports = router;