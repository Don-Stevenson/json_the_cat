const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=';


const fetchBreedDescription = function(breedName, callback) {
  request(url + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body)
    if (data.length === 0) {
      callback("Error, breed not found", null);
    } else {
      callback(null, data[0].description);
    }
  });
};

// fetchBreedDescription(request);

module.exports = { fetchBreedDescription };