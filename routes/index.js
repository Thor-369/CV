
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



var cases= "3646";
/* GET home page. */

router.get('/disco', function(req, res, next) {
  res.render('datos', { title:'Welcome to the discotec'});});


router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"180",
  	muertosP:"159",
  	recuperados:"100",
  	descartados:"3603",
  	sospechosos:"5137",
  	pruebas:"12386",
  	aislamiento:"2687",
  	estables:"521",
  	reservado:"158",

  	guayas:"2524",
  	pichincha:"345",
  	rios:"158",
  	azuay:"99",
  	manabí:"77",
  	loja:"27",
  	chimborazo:"32",
  	bolívar:"27",
  	cañar:"59",
  	morona:"10",
  	sucumbios:"30",
  	imbabura:"20",
  	tsachilas:"34",
  	oro:"56",
  	esmeraldas:"16",
  	elena:"52",
    cotopaxi:"17",
  	tungurahua:"22",
  	galapagos:"11",
  	carchi:"12",
  	pastaza:"11",
  	zamora:"2",
  	napo:"2",
  	orellana:"3",
  	
  	 });
});


module.exports = router;