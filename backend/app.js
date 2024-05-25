const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes - Adjust the paths based on your folder structure
app.use('/api/todos', require('./Routes/todoroutes')); 
app.use('/api/users', require('./Routes/userroutes')); 
app.use('/api/posts', require('./Routes/postRoutes')); 

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
