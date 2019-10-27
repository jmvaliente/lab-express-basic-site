// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/public/index.html');
});
// about page
app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/public/about.html');
  });
// Photo Gallery Page
app.get('/photo', (request, response, next) => {
    response.sendFile(__dirname + '/public/images.html');
  });

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});