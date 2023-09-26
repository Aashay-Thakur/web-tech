var events = require("events");

var eventEmitter = new events.EventEmitter();

var myEventHandler = function () {
	console.log("Hello there");
};

eventEmitter.on("there", myEventHandler);
eventEmitter.emit("there");
