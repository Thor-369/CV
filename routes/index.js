
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



var cases= "2758";
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: cases+' casos de Covid-19 Ecuador',
  	
  	casos:cases, 
  	muertos:"98",
  	recuperados:"58",
  	descartados:"2833",
  	sospechosos:"3428",
  	pruebas:"9019",
  	aislamiento:"2301",
  	estables:"191",
  	reservado:"110",

  	guayas:"1941",
  	pichincha:"248",
  	rios:"100",
  	azuay:"94",
  	manabí:"56",
  	loja:"27",
  	chimborazo:"18",
  	bolívar:"20",
  	cañar:"49",
  	morona:"10",
  	sucumbios:"27",
  	imbabura:"15",
  	tsachilas:"19",
  	oro:"52",
  	esmeraldas:"10",
  	elena:"30",
    cotopaxi:"10",
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