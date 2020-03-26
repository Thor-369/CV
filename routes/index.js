var express = require('express');
var router = express.Router();

var rootsController = require('../controller/Roots');
var roots = new rootsController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Datos actualizados del Covid-19 Ecuador',
  	

  	casos:"1403", 
  	muertos:"34",
  	recuperados:"3",
  	descartados:"1722",
  	sospechosos:"1965",
  	pruebas:"5090",
  	aislamiento:"1214",
  	estables:"71",
  	reservado:"81",

  	guayas:"1021",
  	pichincha:"121",
  	rios:"52",
  	azuay:"37",
  	manabí:"38",
  	loja:"9",
  	chimborazo:"11",
  	bolívar:"11",
  	cañar:"15",
  	morona:"8",
  	sucumbios:"18",
  	imbabura:"8",
  	tsachilas:"8",
  	oro:"20",
  	esmeraldas:"4",
  	elena:"7",
    cotopaxi:"2",
  	tungurahua:"3",
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