
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



var cases= "3368";
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"145",
  	recuperados:"71",
  	descartados:"3288",
  	sospechosos:"3661",
  	pruebas:"10317",
  	aislamiento:"2912",
  	estables:"112",
  	reservado:"128",

  	guayas:"2388",
  	pichincha:"285",
  	rios:"138",
  	azuay:"99",
  	manabí:"67",
  	loja:"27",
  	chimborazo:"25",
  	bolívar:"26",
  	cañar:"56",
  	morona:"10",
  	sucumbios:"27",
  	imbabura:"18",
  	tsachilas:"26",
  	oro:"56",
  	esmeraldas:"14",
  	elena:"48",
    cotopaxi:"13",
  	tungurahua:"13",
  	galapagos:"10",
  	carchi:"9",
  	pastaza:"9",
  	zamora:"2",
  	napo:"1",
  	orellana:"1",
  	
  	 });
});


module.exports = router;