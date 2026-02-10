const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

// Load environment variables from .env.local
dotenv.config({ path: path.join(__dirname, '../.env.local') });

// Connect to MongoDB
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder for uploads
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

// Routes (add your routes here)
app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/content', require('./routes/contentRoutes'));

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'Avenstek API is running...' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

// Error handling middleware (MUST be last)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
});
