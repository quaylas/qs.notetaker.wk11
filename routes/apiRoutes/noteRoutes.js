const  router = require('express').Router();
const fs = require('fs');
const path = require('path');


const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('123456789jkqwxyzJKQWXYZ', 7);

const {findById, createNewNote, deleteNote} = require('../../lib/notes');
const rawNotes = fs.readFileSync(path.resolve(__dirname, '../../db/db.json'));
const notes = JSON.parse(rawNotes);

router.get('/notes', (req, res) => {

    res.json(notes);

});

router.post('/notes', (req, res) => {
    let noteId = nanoid();
    req.body.id = noteId;

    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    const deletedNoteId = req.params.id;

    const updatedNotes = deleteNote(deletedNoteId, notes);
    
    res.json(updatedNotes);
});

module.exports = router;