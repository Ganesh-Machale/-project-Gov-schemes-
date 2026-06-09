const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all schemes
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM schemes');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get scheme by ID
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM schemes WHERE id = ?', [req.params.id]);
        if (rows.length === 0) return res.status(404).json({ message: 'Scheme not found' });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Check eligibility
router.post('/check-eligibility', async (req, res) => {
    const { age, income, gender, occupation } = req.body;

    // This is a basic rule-based filter. In a real app, we'd query the `scheme_eligibility` table.
    // implementing a dynamic SQL query logic here for simplicity & robustness

    try {
        let query = `
            SELECT s.* FROM schemes s
            LEFT JOIN scheme_eligibility se ON s.id = se.scheme_id
            WHERE 1=1
        `;

        // Note: Actual logic would involve complex AND/OR conditions. 
        // For this MVP, we will return schemes that match loosely or have no strict criteira defined in DB yet.
        // Let's simplified mock logic:
        // "Find schemes where description or criteria mentions the occupation or gender" - strict matching is hard without populated eligibility table.
        // We will do a generic search for now as the table might be empty.

        let conditions = [];
        let params = [];

        // This is a placeholder logic. Real logic needs populated `scheme_eligibility`
        const [rows] = await db.query('SELECT * FROM schemes');

        const validSchemes = rows.filter(scheme => {
            // Simple keyword matching since we stored criteria as text in the main table for some schemes
            const criteria = scheme.eligibility_criteria.toLowerCase();
            const text = (criteria + ' ' + scheme.name).toLowerCase();

            let isMatch = true;
            if (income && income > 1000000 && text.includes('poor')) isMatch = false; // Example rule
            if (gender && gender !== 'Any' && text.includes('girl') && gender !== 'Female') isMatch = false;

            return isMatch;
        });

        res.json(validSchemes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
