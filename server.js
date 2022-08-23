const express = require('express');
const app = express();

const connectDB = require('./config/db');
const user = require('./routes/user');
const todo = require('./routes/todo');

// connect DB
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// Init routes
app.use('/api/v1/user', user);
app.use('/api/v1/todo', todo)
// 404 not found
app.use((req, res) => res.status(404).send({ message: `API route not found`, route: `${req.hostname}${req.url}` }));


// set port
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));