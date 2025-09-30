const express = require('express');
const router = express.Router();
const pool = require('../config/database.js');

// GET all destinations
router.get('/', async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM destinations ORDER BY id');
        res.json(results.rows);
    } catch (error) {
        console.error('Error fetching destinations:', error);
        res.status(500).json({ error: 'Failed to fetch destinations' });
    }
});

// GET single destination by destination_id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const results = await pool.query(
            'SELECT * FROM destinations WHERE destination_id = $1',
            [id]
        );
        
        if (results.rows.length === 0) {
            return res.status(404).json({ error: 'Destination not found' });
        }
        
        res.json(results.rows[0]);
    } catch (error) {
        console.error('Error fetching destination:', error);
        res.status(500).json({ error: 'Failed to fetch destination' });
    }
});

module.exports = router;