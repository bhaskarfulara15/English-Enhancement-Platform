const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Default route
app.get('/', (req, res) => {
res.send('Server is running...');
});

// Start server
app.listen(5000, () => {
console.log('Server running on http://localhost:5000');
});

const quizRoutes = require('./routes/quiz');
app.use('/api/quiz', quizRoutes);

const progressRoutes = require('./routes/progress');
app.use('/api/progress', progressRoutes);

