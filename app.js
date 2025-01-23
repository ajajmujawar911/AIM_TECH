// app.js
const express = require('express');
const path = require('path');
const app = express();

// Set the port
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine as EJS for rendering dynamic HTML
app.set('view engine', 'ejs');

// Home route
app.get('/', (req, res) => {
  res.render('index');
});

// About route
app.get('/about', (req, res) => {
  res.render('about');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
