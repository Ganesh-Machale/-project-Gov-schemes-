const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const SECRET_KEY = process.env.JWT_SECRET || 'supersecretkey';

// Register
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: 'All fields are required' });

    try {
        // Check if user exists
        const [existing] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (existing.length > 0) return res.status(400).json({ error: 'Email already registered' });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user
        await db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (users.length === 0) return res.status(401).json({ error: 'Invalid email or password' });

        const user = users[0];

        // Check password (if regular user)
        if (user.password) {
            const match = await bcrypt.compare(password, user.password);
            if (!match) return res.status(401).json({ error: 'Invalid email or password' });
        } else {
            // Google user trying to login via password form
            return res.status(401).json({ error: 'Please login with Google' });
        }

        // Generate Token
        const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, SECRET_KEY, { expiresIn: '24h' });
        res.json({ message: 'Login successful', token, user: { name: user.name, email: user.email } });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Mock Google Login
// In a real app, this would verify a token from the frontend (sent by Google).
// Here, we just blindly trust the email/name sent by client (FOR DEMO/MOCK PURPOSE ONLY)
router.post('/google', async (req, res) => {
    const { email, name, googleId } = req.body;

    try {
        let [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        let user;

        if (users.length === 0) {
            // Create new Google user
            const [result] = await db.query('INSERT INTO users (name, email, google_id) VALUES (?, ?, ?)', [name, email, googleId]);
            user = { id: result.insertId, name, email };
        } else {
            user = users[0];
            // Link google ID if not present
            if (!user.google_id) {
                await db.query('UPDATE users SET google_id = ? WHERE id = ?', [googleId, user.id]);
            }
        }

        const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, SECRET_KEY, { expiresIn: '24h' });
        res.json({ message: 'Google Login successful', token, user: { name: user.name, email: user.email } });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
