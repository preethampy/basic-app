const express = require('express');
const app = express();

// Create a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello Mani.!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
