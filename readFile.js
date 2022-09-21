var fs = require("fs");
 
// Asynchronous read
fs.readFile('files/fileA.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('files/fileA.txt');
console.log("Synchronous read: " + data.toString());