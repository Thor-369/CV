var express = require('express');
var router = express.Router();

var rootsController = require('../controller/Roots');
var roots = new rootsController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Datos actualizados del Covid-19 Ecuador',
  	

  	casos:"1382", 
  	muertos:"34",
  	recuperados:"3",
  	descartados:"1676",
  	sospechosos:"1778",
  	pruebas:"4290",
  	aislamiento:"1028",
  	estables:"87",
  	reservado:"64",

  	guayas:"1000",
  	pichincha:"121",
  	rios:"52",
  	azuay:"37",
  	manabí:"38",
  	loja:"9",
  	chimborazo:"11",
  	bolívar:"11",
  	cañar:"15",
  	morona:"8",
  	sucumbios:"8",
  	imbabura:"8",
  	tsachilas:"8",
  	oro:"20",
  	esmeraldas:"4",
  	elena:"7",
    cotopaxi:"2",
  	tungurahua:"3",
  	galapagos:"4",
  	carchi:"3",
  	pastaza:"1",
  	zamora:"1",


  	napo:"0",
  	orellana:"0",
  	
  	 });
});

router.get('/datos',roots.datos);
router.get('/datos',roots.datos);

module.exports = router;