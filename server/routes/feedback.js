const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        await db.query('INSERT INTO feedback (user_name, email, message) VALUES (?, ?, ?)', [name, email, message]);
        res.json({ message: 'Feedback submitted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
