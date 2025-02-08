const express = require('express');
const path = require('path');
const portfolioItems = require('./data'); // Import portfolio data from data.js

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
// Set the views directory to be the 'views' folder in the current directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define route for the homepage ('/')
app.get('/', (req, res) => {
    // Render the 'index.ejs' template and pass the portfolioItems data to it
    res.render('index', { portfolioItems });
});

// Define route for individual portfolio project details ('/portfolio/:id')
app.get('/portfolio/:id', (req, res) => {
    // Find a portfolio item whose 'id' matches the 'id' from the request parameters
    const project = portfolioItems.find(item => item.id === req.params.id);

    // If no project is found with the given 'id', return a 404 error
    if (!project) {
        return res.status(404).send("Project not found");
    }
    // If a project is found, render the 'portfolio-detail.ejs' template and pass the 'project' data to it
    res.render('portfolio-detail', { project });
});

// Define the port to listen on. Use environment variable PORT if available, otherwise default to 3000
const PORT = process.env.PORT || 3000;
// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});