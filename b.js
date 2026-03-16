const express = require('express');
const app = express();
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Website</h1><p>This is the Home Page.</p>');
});

// About route
app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1><p>This page gives information about our website.</p>');
});

// Services route
app.get('/services', (req, res) => {
  res.send('<h1>Our Services</h1><p>We offer web development, app development, and cloud solutions.</p>');
});

// Contact route
app.get('/contact', (req, res) => {
  res.send('<h1>Contact Us</h1><p>Email: info@example.com</p>');
});

// Handle undefined routes (404)
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
