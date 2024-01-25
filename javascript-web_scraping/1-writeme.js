#!/usr/bin/node

const fs = require('fs'); // imports node.js -file system provides method to interact w fs 

//script writes data(string) to a file, if error it logs err  
fs.writeFile(process.argv[2], process.argv[3], 'utf8', function (err) { //utf8 checks syntax, err = error
  if (err) {      // [2] is the file path, [3] is the string its looking at 
    console.log(err); //if conditional to check for errors 
  } 
});
