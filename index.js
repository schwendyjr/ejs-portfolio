const express = require('express');
const path = require('path');
const portfolioItems = require('./data'); // Import portfolio data
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { portfolioItems, isDetailPage: false, project: null }); // Pass isDetailPage: false for homepage
});

app.get('/portfolio/:id', (req, res) => {
    const project = portfolioItems.find(item => item.id === req.params.id);
    if (!project) {
        return res.status(404).send("Project not found");
    }
    res.render('index', { portfolioItems, project, isDetailPage: true }); // Pass isDetailPage: true and the specific project
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});