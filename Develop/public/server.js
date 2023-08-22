const routes = require('../routes'); // Relative path to the routes module
const express = require ('express')



const app = express();

const PORT = process.env.PORT || 3001;

// Serve static files
app.use(express.static('public'));
app.use(express.json()); // Middleware for JSON parsing
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies




app.use(routes) //view routes and notes(api) routes need to run through here.



// Starts the server
app.listen(PORT, () => {
  console.log(`Express App listening on port ${PORT}`);
});
