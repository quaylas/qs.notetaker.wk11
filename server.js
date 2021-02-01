// initialize imported modules
const express = require('express');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('123456789jkqwxyzJKQWXYZ', 7);
let newId = nanoid();

// initialize built-in modules
const fs = require('fs');
const path = require('path');

// initialize local modules
const apiRoutes =  require('./routes/apiRoutes');
const htmlRoutes = require ('./routes/htmlRoutes');

const rawNotes = fs.readFileSync(path.resolve(__dirname, './db/db.json'));
const notes = JSON.parse(rawNotes);

// initialze express application
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// specify request paths 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// ensure PORT is configured for either live or local environment
const PORT = process.env.PORT || 3001;

// ============= LISTEN ============= //
app.listen(PORT,() => {
    console.log(`API server now on port ${PORT}! and there is an id of ${newId}`);
});