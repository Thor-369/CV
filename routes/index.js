
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



router.post("/new-message", async (req, res) => {
  const { message } = req.body;
  // Payload Notification
  const payload = JSON.stringify({
    title: "My Custom Notification",
    message 
  });
  res.status(200).json();
  try {
    await webpush.sendNotification(pushSubscripton, payload);
  } catch (error) {
    console.log(error);
  }
});



var cases= "3747";
/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});


router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"191",
  	muertosP:"173",
  	recuperados:"100",
  	descartados:"3843",
  	sospechosos:"5137",
  	pruebas:"13039",
  	aislamiento:"3066",
  	estables:"234",
  	reservado:"156",

  	guayas:"2534",
  	pichincha:"395",
  	rios:"158",
  	azuay:"100",
  	manabí:"88",
  	loja:"27",
  	chimborazo:"46",
  	bolívar:"27",
  	cañar:"59",
  	morona:"11",
  	sucumbios:"30",
  	imbabura:"21",
  	tsachilas:"36",
  	oro:"58",
  	esmeraldas:"17",
  	elena:"52",
    cotopaxi:"23",
  	tungurahua:"22",
  	galapagos:"11",
  	carchi:"12",
  	pastaza:"12",
  	zamora:"2",
  	napo:"2",
  	orellana:"4",
  	
  	 });
});


module.exports = router;