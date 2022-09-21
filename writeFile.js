const fs = require('fs');
  
let data = "This text is going to be written in the file";
  
fs.writeFile("files/fileB.txt", data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully");
  }
});