var express = require('express');
var router = express.Router();


const webpush = require("web-push");
webpush.setVapidDetails(
	"mailto:thor.devman@gmail.com",
	process.env.Public_V_Key,
	process.env.Private_V_Key
	);

 let pushSubscription;
router.post("/subscription", (req, res)=> {
	pushSubscription = req.body;
	res.status(200).json();

	const payload = JSON.stringfy({
		title: "Notificación de Pablo",
		message: "Hello Nigga"
	})
	webpush.sendNotification(pushSubscription, payload)
});

var rootsController = require('../controller/Roots');
var roots = new rootsController();
var cases= "2240";
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"75",
  	recuperados:"54",
  	descartados:"2485",
  	sospechosos:"3257",
  	pruebas:"7982",
  	aislamiento:"1805",
  	estables:"206",
  	reservado:"100",

  	guayas:"1563",
  	pichincha:"211",
  	rios:"79",
  	azuay:"77",
  	manabí:"54",
  	loja:"22",
  	chimborazo:"17",
  	bolívar:"15",
  	cañar:"39",
  	morona:"10",
  	sucumbios:"27",
  	imbabura:"10",
  	tsachilas:"18",
  	oro:"34",
  	esmeraldas:"10",
  	elena:"17",
    cotopaxi:"8",
  	tungurahua:"9",
  	galapagos:"5",
  	carchi:"6",
  	pastaza:"5",
  	zamora:"2",


  	napo:"0",
  	orellana:"0",
  	
  	 });
});

router.get('/datos',roots.datos);
router.get('/datos',roots.datos);

module.exports = router;