#!/usr/bin/node

const fs = require('fs');
const fileName = process.argv[2];
const stringName = process.argv[3];

fs.writeFile(fileName, stringName, 'utf8', (err) => {
  if (err) {
    console.log(err);
  }
});
