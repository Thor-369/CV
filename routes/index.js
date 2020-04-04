
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



var cases= "3465";
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"172",
  	muertosP:"146",
  	recuperados:"100",
  	descartados:"3369",
  	sospechosos:"3661",
  	pruebas:"10317",
  	aislamiento:"2666",
  	estables:"527",
  	reservado:"139",

  	guayas:"2402",
  	pichincha:"321",
  	rios:"153",
  	azuay:"99",
  	manabí:"71",
  	loja:"27",
  	chimborazo:"31",
  	bolívar:"26",
  	cañar:"56",
  	morona:"10",
  	sucumbios:"27",
  	imbabura:"20",
  	tsachilas:"31",
  	oro:"56",
  	esmeraldas:"14",
  	elena:"48",
    cotopaxi:"16",
  	tungurahua:"22",
  	galapagos:"11",
  	carchi:"9",
  	pastaza:"9",
  	zamora:"2",
  	napo:"2",
  	orellana:"2",
  	
  	 });
});


module.exports = router;