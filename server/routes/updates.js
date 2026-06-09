const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all updates
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM scheme_updates ORDER BY date DESC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
