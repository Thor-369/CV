
var express = require('express');
var router = express.Router();

//web push
const webpush = require("../controller/webpushC");
 let pushSubscription;

router.post("/subscription", async (req, res)=> {
	pushSubscription = req.body;
	res.status(200).json();

	const payload = JSON.stringfy({
		title: "Notificación de Pablo",
		message: "Hello Nigga"+" son: "+cases+" casos confirmados"
	})
	try{
	webpush.sendNotification(pushSubscription, payload)
}catch(error){
	console.log(error)
}
});


var cases= "2748";
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"93",
  	recuperados:"58",
  	descartados:"2799",
  	sospechosos:"3200",
  	pruebas:"8747",
  	aislamiento:"2289",
  	estables:"208",
  	reservado:"100",

  	guayas:"1937",
  	pichincha:"245",
  	rios:"100",
  	azuay:"94",
  	manabí:"56",
  	loja:"26",
  	chimborazo:"17",
  	bolívar:"20",
  	cañar:"49",
  	morona:"10",
  	sucumbios:"27",
  	imbabura:"15",
  	tsachilas:"19",
  	oro:"52",
  	esmeraldas:"10",
  	elena:"30",
    cotopaxi:"9",
  	tungurahua:"10",
  	galapagos:"7",
  	carchi:"6",
  	pastaza:"5",
  	zamora:"2",


  	napo:"0",
  	orellana:"0",
  	
  	 });
});


module.exports = router;