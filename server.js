const express = require('express');
const app = express();

const connectDB = require('./config/db');
const user = require('./routes/user');

// connect DB
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// Init routes
app.use('/api/v1/user', user);


// set port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));