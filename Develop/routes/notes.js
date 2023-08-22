

const router = require('express').Router()
const notes = require('./db/db.json')

const path = require('path');
const dataPath= path.join(__dirname,'db', 'notes.json')

// Route to create a new note
router.post('/notes', (req, res) => {
    const newNote = req.body;
  
  });

  module.exports= router

