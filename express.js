const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	console.log("GET Request on /");
	res.send("Hello World!", 200);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
