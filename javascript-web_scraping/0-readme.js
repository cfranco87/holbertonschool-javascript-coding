#!/usr/bin/node

const fs = require('fs'); // imports node.js -file system provides method to interact w fs 

//line reads content of file path provided by command line, [2] second command line arg  
fs.readFile(process.argv[2], 'utf8', function (err, data) { //utf8 checks syntax, err = error, data =file content 
  if (err) {  
    console.log(err); //if conditional to check for errors 
  } else {
    process.stdout.write(data); //else conditional for writing out content of file
  }
});
