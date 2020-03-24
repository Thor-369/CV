var express = require('express');
var router = express.Router();

var rootsController = require('../controller/Roots');
var roots = new rootsController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Datos actualizados del Covid-19 Ecuador',
  	

  	casos:"1049", 
  	muertos:"27",
  	recuperados:"3",
  	descartados:"1211",
  	sospechosos:"1184",
  	pruebas:"3444",
  	aislamiento:"886",
  	estables:"78",
  	reservado:"55",

  	guayas:"807",
  	pichincha:"71",
  	rios:"32",
  	azuay:"28",
  	manabí:"30",
  	loja:"7",
  	chimborazo:"9",
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