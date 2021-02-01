// import required modules
const  router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('123456789jkqwxyzJKQWXYZ', 7);

// import locaal modules
const {createNewNote, deleteNote} = require('../../lib/notes');

// route to retrieve stored notes
router.get('/notes', (req, res) => {
    const rawNotes = fs.readFileSync(path.resolve(__dirname, '../../db/db.json'));
    const notes = JSON.parse(rawNotes);

    res.json(notes);

});

// route to create and store a new note
router.post('/notes', (req, res) => {
    const rawNotes = fs.readFileSync(path.resolve(__dirname, '../../db/db.json'));
    const notes = JSON.parse(rawNotes);

    let noteId = nanoid();
    req.body.id = noteId;

    const note = createNewNote(req.body, notes);
    res.json(note);
});

// route to delete a note based on its id
router.delete('/notes/:id', (req, res) => {
    const deletedNoteId = req.params.id;

    let updatedNotes = fs.readFileSync(path.join(__dirname, '../../db/db.json'),'utf8');
    updatedNotes =  JSON.parse(updatedNotes);
    
    updatedNotes = deleteNote(deletedNoteId,updatedNotes);

    fs.writeFileSync(path.join(__dirname, '../../db/db.json'), updatedNotes)
    res.json(updatedNotes);
});

module.exports = router;