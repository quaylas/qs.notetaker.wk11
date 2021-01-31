const  router = require('express').Router();
const fs = require('fs');
const path = require('path');

// const { notes } = require('../../db/db.json');
const rawNotes = fs.readFileSync(path.resolve(__dirname, '../../db/db.json'));
const notes = JSON.parse(rawNotes);

router.get('/notes', (req, res) => {
    let response = notes;

    res.json(response);

});

module.exports = router;