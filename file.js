//* Node File Systems Module - Allows you to work with files on the system
const fs = require("fs");

//? Write to a file
let text = fs.readFileSync("read.txt", "utf-8");
text = text.replace("application", "file");

console.log("The content of the file is:\n\t");
console.log(text);
console.log("Creating a new file..");
fs.writeFileSync("test.text", text);
