const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const schemesRoutes = require('./routes/schemes');
const quizRoutes = require('./routes/quiz');
const feedbackRoutes = require('./routes/feedback');
const authRoutes = require('./routes/auth');
const updatesRoutes = require('./routes/updates');

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public'))); // Serve static frontend files

// Routes
app.use('/api/schemes', schemesRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/updates', updatesRoutes);

// Fallback for non-API routes (if we were using client-side routing, but here we serve pages directly)
// For now, let's just log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
