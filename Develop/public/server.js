const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // Import uuidv4 from uuid library
const PORT = process.env.PORT || 3001;

// Serve static files
app.use(express.static('public'));
app.use(express.json()); // Middleware for JSON parsing
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Example array to store notes
const notes = [];

// Route to get all notes
app.get('/api/notes', (req, res) => {
  res.json(notes);
});

// Route to create a new note
app.post('/api/notes', (req, res) => {
  const newNote = req.body;

  // Generate a unique ID using uuidv4
  newNote.id = uuidv4();

  notes.push(newNote);
  res.status(201).json(newNote);
});

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

// Serve the main HTML file for the root route
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath);
});

// Serve the notes HTML file for the '/notes' route
app.get('/notes', (req, res) => {
  const filePath = path.join(__dirname, 'notes.html');
  res.sendFile(filePath);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Express App listening on port ${PORT}`);
});
