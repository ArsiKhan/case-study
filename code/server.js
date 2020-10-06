const express = require('express');
// create express app
const app = express();

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

    
// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to the api service"});
});

// listen for requests
app.listen(process.env.SERVE_PORT, () => {
    console.log(`Server is listening on port ${process.env.SERVE_PORT}`);
});

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,    // Supress warning messages
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


