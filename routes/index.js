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
var cases= "1966";
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	

  	casos:cases, 
  	muertos:"62",
  	recuperados:"3",
  	descartados:"2253",
  	sospechosos:"3232",
  	pruebas:"7451",
  	aislamiento:"1544",
  	estables:"206",
  	reservado:"100",

  	guayas:"1397",
  	pichincha:"191",
  	rios:"60",
  	azuay:"57",
  	manabí:"50",
  	loja:"21",
  	chimborazo:"15",
  	bolívar:"14",
  	cañar:"28",
  	morona:"10",
  	sucumbios:"25",
  	imbabura:"9",
  	tsachilas:"15",
  	oro:"30",
  	esmeraldas:"7",
  	elena:"10",
    cotopaxi:"5",
  	tungurahua:"4",
  	galapagos:"4",
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