const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Mongo error:', err));

app.use('/api/feedback', require('./routes/feedbackRoutes'));

app.get('/', (req, res) => {
  res.send('Backend is running...');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
