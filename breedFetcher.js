const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + process.argv[2];

request(url, (error, response, body) => {
  if(error){
    console.log('Handle request errors and print the error details to the screen.')
    return;  
  }  
  const data = JSON.parse(body) 
  if (data.length === 0) {
    console.log("Error, breed not found");
  } else {
    console.log(data[0].description);}
});
