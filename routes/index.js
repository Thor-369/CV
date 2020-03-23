var express = require('express');
var router = express.Router();

var rootsController = require('../controller/Roots');
var roots = new rootsController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Datos actualizados del Covid-19 Ecuador',
  	

  	casos:"981", 
  	muertos:"18",
  	recuperados:"3",
  	descartados:"1091",
  	sospechosos:"708",
  	pruebas:"2780",
  	aislamiento:"824",
  	estables:"95",
  	reservado:"41",

  	guayas:"769",
  	pichincha:"65",
  	rios:"28",
  	azuay:"27",
  	manabí:"27",
  	loja:"5",
  	chimborazo:"9",
  	bolívar:"9",
  	cañar:"5",
  	morona:"6",
  	sucumbios:"6",
  	imbabura:"4",
  	tsachilas:"7",
  	oro:"9",
  	esmeraldas:"3",
  	elena:"4",
    cotopaxi:"1",
  	tungurahua:"1",

  	carchi:"0",
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