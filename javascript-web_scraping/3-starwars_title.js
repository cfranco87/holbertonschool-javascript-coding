#!/usr/bin/node

const fs = require('request');
const urlApi = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

request(urlApi, function( error, response, body) {
    if (error) {
        console.log(error);
      } else {
        console.log(JSON.parse(body).title); 
      }
});
