const router = require('express').Router()
const path = require('path');


// Route to get all notes
router.get('/api/notes', (req, res) => {
    res.json(notes);
  });
  
  // Serve the main HTML file for the root route
router.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath);
});

// Serve the notes HTML file for the '/notes' route
router.get('/notes', (req, res) => {
  const filePath = path.join(__dirname, 'notes.html');
  res.sendFile(filePath);
});


module.exports = router;