
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



var cases= "3163";
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"120",
  	recuperados:"65",
  	descartados:"3139",
  	sospechosos:"3302",
  	pruebas:"9604",
  	aislamiento:"2753",
  	estables:"103",
  	reservado:"122",

  	guayas:"2243",
  	pichincha:"259",
  	rios:"131",
  	azuay:"99",
  	manabí:"61",
  	loja:"27",
  	chimborazo:"24",
  	bolívar:"26",
  	cañar:"53",
  	morona:"10",
  	sucumbios:"27",
  	imbabura:"16",
  	tsachilas:"24",
  	oro:"56",
  	esmeraldas:"11",
  	elena:"44",
    cotopaxi:"12",
  	tungurahua:"12",
  	galapagos:"10",
  	carchi:"7",
  	pastaza:"7",
  	zamora:"2",
  	napo:"1",
  	orellana:"1",
  	
  	 });
});


module.exports = router;