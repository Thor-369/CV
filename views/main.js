
const Public_V_Key="BJ7mU7u4wZY1E87vlMKjX5D6isUWw0qFsEv1sGh-kpWMOrt9xS5cONGAqe4B3nXYh_EZ0KZ6RUdNPYbALDOpmEw";

const subscription= async () => {

const register = await navigator.serviceWorker.register("/worker.js"{
	scope :"/"
});
console.log("new service worker");

 register.pushManager.subscribe({
 	userVisibleOnly: true,
 	applicationServerKey: Public_V_Key
 });


await fetch("/subscription",{
	  method:"POST",
	  body: JSON.stringify(subscription),
	  headers:{
		"Content-Type":"application/json"
	  }
	});
	console.log("Subscrito");
};
subscription();