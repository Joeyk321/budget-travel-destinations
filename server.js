 const express = require('express');
const path = require('path');
const destinations = require('./data/destinations');

const app = express();
const PORT = 3000;

// Serve static files from public directory
app.use(express.static('public'));

// Home route - display all destinations
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API route to get all destinations (for frontend to fetch)
app.get('/api/destinations', (req, res) => {
    res.json(destinations);
});

// Individual destination routes
app.get('/destinations/:id', (req, res) => {
    const destination = destinations.find(d => d.id === req.params.id);
    if (destination) {
        // Send the destination detail page
        res.sendFile(path.join(__dirname, 'views', 'destination.html'));
    } else {
        res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    }
});

// API route to get single destination (for frontend to fetch)
app.get('/api/destinations/:id', (req, res) => {
    const destination = destinations.find(d => d.id === req.params.id);
    if (destination) {
        res.json(destination);
    } else {
        res.status(404).json({ error: 'Destination not found' });
    }
});

// 404 handler for all other routes
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
    console.log(`🌍 Budget Travel Destinations app running at http://localhost:${PORT}`);
});
