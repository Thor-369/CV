var express = require('express');
var router = express.Router();

var rootsController = require('../controller/Roots');
var roots = new rootsController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Datos actualizados del Covid-19 Ecuador',
  	

  	casos:"1835", 
  	muertos:"48",
  	recuperados:"3",
  	descartados:"2100",
  	sospechosos:"2680",
  	pruebas:"6615",
  	aislamiento:"1553",
  	estables:"121",
  	reservado:"110",

  	guayas:"1345",
  	pichincha:"171",
  	rios:"60",
  	azuay:"42",
  	manabí:"44",
  	loja:"13",
  	chimborazo:"15",
  	bolívar:"14",
  	cañar:"19",
  	morona:"8",
  	sucumbios:"18",
  	imbabura:"9",
  	tsachilas:"15",
  	oro:"23",
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