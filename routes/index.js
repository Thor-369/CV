var express = require('express');
var router = express.Router();

var rootsController = require('../controller/Roots');
var roots = new rootsController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Datos actualizados del Covid-19 Ecuador',
  	

  	casos:"1890", 
  	muertos:"57",
  	recuperados:"3",
  	descartados:"2159",
  	sospechosos:"2835",
  	pruebas:"6884",
  	aislamiento:"1596",
  	estables:"120",
  	reservado:"114",

  	guayas:"1376",
  	pichincha:"171",
  	rios:"60",
  	azuay:"53",
  	manabí:"46",
  	loja:"15",
  	chimborazo:"15",
  	bolívar:"14",
  	cañar:"25",
  	morona:"9",
  	sucumbios:"18",
  	imbabura:"9",
  	tsachilas:"15",
  	oro:"25",
  	esmeraldas:"4",
  	elena:"10",
    cotopaxi:"5",
  	tungurahua:"4",
  	galapagos:"4",
  	carchi:"5",
  	pastaza:"5",
  	zamora:"1",


  	napo:"0",
  	orellana:"0",
  	
  	 });
});

router.get('/datos',roots.datos);
router.get('/datos',roots.datos);

module.exports = router;