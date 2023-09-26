//* Server Module - Allows you to create a server
var http = require("http");

//? Create a server
http.createServer(function (req, res) {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.write("Hello node");
	res.end();
}).listen(3000, () => {
	//? Listen to for requests on port 3000
	console.log("Server is running at port 3000");
	console.log("http://localhost:3000");
});
