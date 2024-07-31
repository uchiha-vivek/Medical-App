const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = 'your_mongodb_connection_string';

app.use(cors({
    origin: 'http://localhost:5173', // Your React app's URL
    credentials: true,
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

mongoose.connect('mongodb+srv://madara_uchiha:madara_uchiha@cluster0.mabn2pc.mongodb.net/medec', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Connection error', error.message);
  });
