const express = require('express');
const path = require('path');
require('dotenv').config();

const destinationsRouter = require('./routes/destinations.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from client/public directory
app.use(express.static(path.join(__dirname, '../client/public')));

// API routes - use the router
app.use('/api/destinations', destinationsRouter);

// Serve destination detail pages
app.get('/destinations/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/views/destination.html'));
});

// Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../client/views/404.html'));
});

app.listen(PORT, () => {
    console.log(`🌍 Budget Travel Destinations app running at http://localhost:${PORT}`);
});