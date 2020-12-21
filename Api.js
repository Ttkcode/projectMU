var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=53fca4c474624e8aa34a72625688e1fa';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
var url = 'http://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2020-12-21&' +
          'sortBy=popularity&' +
          'apiKey=53fca4c474624e8aa34a72625688e1fa';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
