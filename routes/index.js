var express = require('express');
var router = express.Router();

var rootsController = require('../controller/Roots');
var roots = new rootsController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Datos actualizados del Covid-19 Ecuador',
  	

  	casos:"1924", 
  	muertos:"58",
  	recuperados:"3",
  	descartados:"2199",
  	sospechosos:"2869",
  	pruebas:"6992",
  	aislamiento:"1562",
  	estables:"191",
  	reservado:"110",

  	guayas:"1377",
  	pichincha:"188",
  	rios:"60",
  	azuay:"53",
  	manabí:"50",
  	loja:"15",
  	chimborazo:"15",
  	bolívar:"14",
  	cañar:"26",
  	morona:"9",
  	sucumbios:"25",
  	imbabura:"9",
  	tsachilas:"15",
  	oro:"25",
  	esmeraldas:"7",
  	elena:"10",
    cotopaxi:"5",
  	tungurahua:"4",
  	galapagos:"4",
  	carchi:"6",
  	pastaza:"5",
  	zamora:"1",


  	napo:"0",
  	orellana:"0",
  	
  	 });
});

router.get('/datos',roots.datos);
router.get('/datos',roots.datos);

module.exports = router;