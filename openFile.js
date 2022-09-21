var fs = require("fs");

// Asynchronous - Opening File  
console.log("Going to open file!");
fs.open('files/fileA.txt', 'r+', function (err, fileRef) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
    console.log(fileRef.toString());
}); 