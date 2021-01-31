// initialize imported modules
const express = require('express');

// initialize built-in modules
const fs = require('fs');
const path = require('path');

// initialize local modules
// const apiRoutes =  require('./routes/apiRoutes');
const htmlRoutes = require ('./routes/htmlRoutes');

// initialize notes data
const { notes } = require('./db/db.json');

// initialze express application
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// specify request paths 
// app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// ensure PORT is configured for either live or local environment
const PORT = process.env.PORT || 3001;

// ============= LISTEN ============= //
app.listen(PORT,() => {
    console.log(`API server now on port ${PORT}!`);
});