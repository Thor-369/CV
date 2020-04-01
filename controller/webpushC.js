
const webpush = require("web-push");

console.log("Key:" + process.env.Public_V_Key);
webpush.setVapidDetails(
	"mailto:thor.devman@gmail.com",
	process.env.Public_V_Key,
	process.env.Private_V_Key
	);




module.exports = webpush;