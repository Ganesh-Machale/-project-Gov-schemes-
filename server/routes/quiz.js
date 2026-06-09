const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get generic quiz questions (random 5)
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT id, question_text, option_a, option_b, option_c, option_d FROM quiz_questions ORDER BY RAND() LIMIT 5');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Submit quiz score
router.post('/submit', async (req, res) => {
    const { score, total } = req.body;
    try {
        await db.query('INSERT INTO quiz_results (score, total_questions) VALUES (?, ?)', [score, total]);
        res.json({ message: 'Score saved successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Validate Answer (Optional, if we want server-side validation per question)
router.post('/validate', async (req, res) => {
    const { questionId, selectedOption } = req.body;
    try {
        const [rows] = await db.query('SELECT correct_option FROM quiz_questions WHERE id = ?', [questionId]);
        if (rows.length === 0) return res.status(404).json({ message: 'Question not found' });

        const isCorrect = rows[0].correct_option === selectedOption;
        res.json({ isCorrect, correctOption: rows[0].correct_option });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
