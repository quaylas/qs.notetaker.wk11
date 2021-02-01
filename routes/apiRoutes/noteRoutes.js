const  router = require('express').Router();
const fs = require('fs');
const path = require('path');

const rawNotes = fs.readFileSync(path.resolve(__dirname, '../../db/db.json'));
const notes = JSON.parse(rawNotes);

router.get('/notes', (req, res) => {

    res.json(notes);

});

module.exports = router;