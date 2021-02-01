// import required modules
const fs = require('fs');
const path = require('path');

// function to create new note
function createNewNote(body, notesArray) {
    const  note = body;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );

    return note;
};

// function to delete a note
function deleteNote(id, notesArray) {

    notesArray = notesArray.filter(note => note.id !== id);

    notesArray = JSON.stringify(notesArray, null, 2);

    return notesArray;
};

module.exports = {
    createNewNote,
    deleteNote
};