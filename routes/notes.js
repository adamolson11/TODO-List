

const router = require('express').Router()
const notes = require('./db/db.json')
const {generateId} = require('./utils/generator')
const path = require('path');

// Route to create a new note
router.post('/notes', (req, res) => {
    const newNote = req.body;
  
  });

  module.exports= router

