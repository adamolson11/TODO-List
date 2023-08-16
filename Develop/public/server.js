const path = require('path')
const express = require('express')
const app = express()//this creates a new express app
const PORT = 3001
//const heroes = require('./Develop/db/db.json') 
//***************//this imports the JSON array where your data is stored. get it data folder.

//middleware that passes the module path through the routes. it is the entrypoint for all your page and API routes.
app.use(express.static(path.join(__dirname, 'public')));


//Page Routes
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
    }
  });
});


app.get('/api/notes', (req, res) => {
  const filePath = path.join(__dirname, 'notes.html');
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
    }
  });
});


app.listen(PORT, () => {
  console.log(`Express App listening on port http://localhost:${PORT}`) //this one is important, without it you can't open the port.
})





//I need to...Express.js back end and will save 
//express to retrieve note data from a JSON file.
//build the backend 
        //
//connect the front end with the backend 
// Deploy to Heroku
//get set up with Heroku. 