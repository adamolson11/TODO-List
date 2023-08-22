const notes = require('./db/db.json')
const {generateId} = require('./utils/generator')
const path = require('path');


// Route to delete a note by ID
app.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;
    const index = notes.findIndex(note => note.id === noteId);
    if (index !== -1) {
      notes.splice(index, 1);
      res.sendStatus(204); // No Content
    } else {
      res.sendStatus(404); // Not Found
    }
  });
  