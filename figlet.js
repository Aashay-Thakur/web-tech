const figlet = require("figlet");

figlet("Hello World", (err, data) => {
	if (err) {
		console.error("Something went wrong...");
		console.dir(err);
		return;
	}
	console.log(data);
});
