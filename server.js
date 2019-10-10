const express = require('express');
const app = express();

const connectDB = require('./config/db');

// connect DB
connectDB();

// Init middleware
app.use(express.json({ extended: false }));


// set port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));