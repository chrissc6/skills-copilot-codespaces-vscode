// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route
app.get('/comments', (req, res) => {
  res.json({ comments: [ { author: 'John', content: 'first comment' } ] });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Path: index.js
// Create a request to the web server
const axios = require('axios');

axios.get('http://localhost:3000/comments')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });